import bcrypt from 'bcryptjs';
import { InterfaceUser, UserEmail, UserName, UserPassword, UserSalt } from "../application/User/domain/IUsers"

class User implements InterfaceUser {
    username:UserName ;
    email: UserEmail ;
    password: UserPassword ;
    salt:UserSalt ;
    
    constructor(builder:UserBuilder){
        this.username = builder.username;
        this.email= builder.email;
        this.password = builder.password;
        this.salt = builder.salt;
    }
}


export class UserBuilder   {
    username: UserName;
    email: UserEmail;
    password: UserPassword;
    salt: UserSalt; 

    constructor() {
        this.username='';
        this.email ='' ;
        this.password =''
        this.salt = '';
    }


    setGeneralInfo(username:UserName,email:UserEmail):this{
        this.username = username
        this.email = email
        
       return this
    }

    hashPass(password:UserPassword):this {
       const generatedSalt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, generatedSalt);

        this.salt = generatedSalt;
        this.password = hashedPassword;
        return this;
    }

    build(){
        return new User(this)
    }
}


