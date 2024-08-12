import { User } from "../domain/enitities/User";
import { UserService } from "../domain/service/UserService";

export class UserUseCase {
    constructor(readonly userService: UserService){}

    public executeCreateUser( userEmail:string, userPassword:string, userSalt:string) : User {
        return this.userService.userCreate(userEmail,userPassword,userSalt)
    }

    
}