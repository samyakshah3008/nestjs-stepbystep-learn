import { Controller, Get, Req, Res, Param, ParseIntPipe,HttpException,HttpStatus,Post,Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import {Request, Response} from "express"
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {

    constructor(private customersService: CustomersService){}

    @Get(':id')
    getCustomers(@Param('id', ParseIntPipe) id: number, @Req() req: Request, @Res() res: Response){
        const customer =  this.customersService.getCustomers(id)
        if(customer){
            res.send(customer)
        } else{
            res.status(400).send({msg: "Customers not found"})
        }
    } 

    @Get('/search/:id')
    findCustomers(@Param('id', ParseIntPipe) id: number){
        const customer = this.customersService.getCustomers(id)
        if(customer){
            return customer
        } else {
            throw new HttpException("Not found", HttpStatus.BAD_REQUEST)
        }
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto){
      this.customersService.createCustomers(createCustomerDto)
    }

    @Get()
    getAllCustomers(){
        return this.customersService.getAllCustomers()
    }

   
}
