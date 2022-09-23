import { IsEmail,IsNumberString,IsNotEmpty, ValidateNested,IsNotEmptyObject } from "class-validator";
import { Type } from "class-transformer";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto{
    @IsEmail()
    email: string;
    @IsNumberString()
    id: number;
    @IsNotEmpty()
    name: string;
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(()=> CreateAddressDto)
    address: CreateAddressDto
}