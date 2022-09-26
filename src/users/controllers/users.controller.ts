import { Controller, Get, HttpException, HttpStatus, Param, UseFilters } from "@nestjs/common";
import { UserNotFoundException } from "../exceptions/UserNotFound.exception";
import { HttpExceptionFilter } from "../filters/HttpException.filter";
import { UsersService } from "../services/users.service";

@Controller('users')

export class UsersController{

    constructor(private readonly userService: UsersService){}

    @Get()
    getUser(){
       return this.userService.getUsers() 
    }
    @Get(':user')
    @UseFilters(HttpExceptionFilter)
    getParticularUser(@Param('user') user: string){
        const foundUser = this.userService.getUserByUsername(user)
        if(foundUser){
            return foundUser
        } 
        // else {
        //     throw new HttpException("User not found",HttpStatus.BAD_REQUEST)
        // }
        else {
            throw new UserNotFoundException()
        }
    }
}