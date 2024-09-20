import { UserBuilder } from "../../domain/ model/concreteBuilder/UserBuilder";
import { User } from "../../domain/ model/enitities/User";
import { UserRepository } from "../../domain/repository/UserRepository";


export class UserService {


    constructor(private userRepository:UserRepository) {}
    
    public async createUser(userName: string, userEmail:string, userPassword:string, userSalt:string, userId?:string) : Promise<User | void> {
        
        const newUser = new UserBuilder()
        .setGeneralInfo(userName,userEmail,userId)
        .setPassword(userPassword,userSalt)
        .build()
        await this.userRepository.createUser(newUser)
        return newUser
    }

    public async getUserById(userId:string) : Promise<User | null > {
        
        const user = await this.userRepository.getUserById(userId)    
        
        if(!user) throw new Error("User Not Found")
        
        console.log('UserService', user)
        return user
        
    }
    
    
    public async deleteUser(userId : string) : Promise<User> {
        const userToDelete = this.getUserById(userId)
          
        if(!userToDelete) throw new Error('deleteUserAdpater')
        
        const userDeleted = await this.userRepository.deleteUser(userId)
        
        return userDeleted
    }

    public async editUser(user: User): Promise<User> {
        const userToEdit = user.getUserId
        console.log('EditUser', userToEdit)

        
        if(!userToEdit) throw new Error("User Not Found")
            const userResult = userToEdit != null ? await this.userRepository.editUser(user): new User()
            console.log('userEditUser',userResult)
            return userResult
    }

    

    
}