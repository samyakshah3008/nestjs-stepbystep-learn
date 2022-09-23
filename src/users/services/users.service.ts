import { Injectable } from "@nestjs/common";
import { User } from "../types/User";


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
        return this.users
    }

    getUserByUsername(user: string){
      return this.users.find((dbUser)=> dbUser.username === user)

    }

}