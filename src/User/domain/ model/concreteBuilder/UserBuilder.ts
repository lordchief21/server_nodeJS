
import { User } from '../enitities/User';
import { Builder } from '../builder/Builder';


export class UserBuilder implements Builder  {
    private user : User

    constructor() {
        this.user = new User()
    }

    public setGeneralInfo(userName:string, userEmail: string): this {
        this.user.setGeneralInfo(userName,userEmail,'undefined')
        return this
    }
    
    public setPassword(userPassword: string, userSalt: string): this {
        this.user.setPassword(userPassword,userSalt)
        return this
    }

    public build(){
        return this.user
    }
}

