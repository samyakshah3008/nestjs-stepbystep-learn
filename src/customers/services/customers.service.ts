import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {

    users = [
        {
            id: 1,
            email: "sam1@gmail.com",
            name: "Danny Danny"
        },
        {
            id: 2,
            email: "sam2@gmail.com",
            name: "Adam Adam"
        },        {
            id: 3,
            email: "sam3@gmail.com",
            name: "Spencer Spencer"
        },
    ]

    getCustomers(userSentId:number){
       return this.users.find((user) => user.id === userSentId)
        
    }

    createCustomers(customerDto: CreateCustomerDto){
        this.users.push(customerDto)
    }

    getAllCustomers(){
        return this.users
    }
}
