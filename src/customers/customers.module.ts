import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer-account.middleware';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CustomersService } from './services/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer){
    consumer.apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware)
    .exclude(
      {
        path: '/api/customers/search/:id',
        method: RequestMethod.GET
      }, // in exclude provide full url
      // Hello World this is Soham! WOWWW such an am,azing experience! 
    )
    .forRoutes(CustomersController)
  } // or can do it for entire controller as well example customerscontroller
  
}
