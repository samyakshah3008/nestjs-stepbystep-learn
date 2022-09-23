import { Controller, Get, Param } from "@nestjs/common";
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
        return this.userService.getUserByUsername(user)
    }
}