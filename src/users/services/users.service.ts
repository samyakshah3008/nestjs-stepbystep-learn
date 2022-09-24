import { Injectable } from "@nestjs/common";
import { SerializedUser, User } from "../types";
import {plainToClass} from "class-transformer"


@Injectable()

export class UsersService{
    private users: User[] = [
        {
            username: "anson",
            password: "anson"
        },
        {
            username: "Danny",
            password: "Danny"
        },{
            username: "Stephen",
            password: "Stepehn"
        }
    ]

    getUsers(){
        return this.users.map((user)=> plainToClass(SerializedUser,user))
    }

    getUserByUsername(user: string){
      const particularUser = this.users.find((dbUser)=> dbUser.username === user)
      return plainToClass(SerializedUser,particularUser) 

    }

}