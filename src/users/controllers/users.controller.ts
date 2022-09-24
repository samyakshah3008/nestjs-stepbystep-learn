import { Controller, Get, HttpException, HttpStatus, Param } from "@nestjs/common";
import { UsersService } from "../services/users.service";

@Controller('users')

export class UsersController{

    constructor(private readonly userService: UsersService){}

    @Get()
    getUser(){
       return this.userService.getUsers()
    }
    @Get(':user')
    getParticularUser(@Param('user') user: string){
        const foundUser = this.userService.getUserByUsername(user)
        if(foundUser){
            return foundUser
        } else {
            throw new HttpException("User not found",HttpStatus.BAD_REQUEST)
        }
    }
}