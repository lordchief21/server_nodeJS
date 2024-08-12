import { UserBuilder } from "../concreteBuilder/UserBuilder";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {

    constructor(private userRepository:UserRepository) {}
    
    public userCreate(userEmail:string, userPassword:string, userSalt:string) {
        const newUser = new UserBuilder()
        .setGeneralInfo(userEmail).setPassword(userPassword,userSalt)
        .build()
        this.userRepository.save(newUser)
        return newUser
    }

    
}