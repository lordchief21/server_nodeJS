
import { User } from '../enitities/User';
import { Builder } from '../builder/Builder';

type UserId = string | "undefined"


export class UserBuilder implements Builder  {
    private user : User
    
    constructor() {
        this.user = new User()
    }

    public setGeneralInfo(userName:string, userEmail: string, userId?:string): this {
        
        if(userId == "undefined") {
            this.user.setGeneralInfo(userName,userEmail)
            return this
        } else {
            this.user.setGeneralInfo(userName,userEmail,userId)
            return this
        }  
    }
    
    public setPassword(userPassword: string, userSalt: string,): this {
        this.user.setPassword(userPassword,userSalt)
        return this
    }


    public infoUser() {
        this.user.infoUser
    }


    public build(){
        return this.user
    }
}

