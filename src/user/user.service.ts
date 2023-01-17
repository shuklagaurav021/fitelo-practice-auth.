import { Injectable } from "@nestjs/common/decorators";
import { user } from "./user.entity";

export type User = any;// This should be a real class/interface representing a user entity

@Injectable()
export class UserService {
   public users : user[]=[
    {
    username : "Gaurav",
    password : "admin",
    email : "Gaurav@gmail.com",
    age : 22,
   },

   {
    username : "shukla",
    password : "admin",
    email : "shukla@gmail.com",
    age : 23,
   },
 
{
    username : "satrk",
    password : "admin",
    email : "stark@gmail.com",
    age : 24,
   }
   ];
   async findOne(username: string): Promise<user | undefined> {
    return this.users.find(user => user.username === username);
 
}
}