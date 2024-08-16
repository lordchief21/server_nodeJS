import { UserBuilder } from "../../domain/ model/concreteBuilder/UserBuilder";
import { UserRepository } from "../../domain/repository/UserRepository";


export class UserService {

    constructor(private userRepository:UserRepository) {}
    
    public userCreate(userName: string, userEmail:string, userPassword:string, userSalt:string) {
        
        const newUser = new UserBuilder()
        .setGeneralInfo(userName,userEmail)
        .setPassword(userPassword,userSalt)
        .build()

        return this.userRepository.createUser(newUser)
    }

    

    
}