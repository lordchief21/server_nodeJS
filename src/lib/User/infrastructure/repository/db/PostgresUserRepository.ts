import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import Users from "../../models/UserModel.model";
import SequelizeRepository from "../../connectionDB/SequelizeConnection";
import { UserRepository } from "../../../domain/repository/UserRepository";
import { User } from "../../../domain/ model/enitities/User";
import { UserBuilder } from "../../../domain/ model/concreteBuilder/UserBuilder";



export class PostgresUserRepository implements UserRepository {
    
    
    
    constructor(readonly sequelizeRepository : SequelizeRepository) {
    }

    async createUser(user: User): Promise<void> {
        try {
            await this.sequelizeRepository.connectDb()
        Users
        .build({ 
            username: user.getUserName , 
            email: user.getUserEmail, 
            hashed_pass:user.getUserPassword, 
            salt:user.getUserSalt
        })
        .save()
            
        } catch (error) {
            console.log('Adapater Repository ')
            
        }
        
    }

    async getUserById(userId: string): Promise<User | null> {
        const user = await Users.findOne({
            where: {
                userID: userId
            }
        })

        if(!user) throw Error('User Not Found')

        const mapUser = this.mapToUserDomain(user)
        
        console.log('UserPostgres', mapUser)
       
        return mapUser
        
    }

    async deleteUser(userId: string): Promise<User> {
        
        const user = await Users.findOne({
            where: {
                userID: userId
            }
        })
        
        

        if(!user) throw Error('User Not Found')
            
            const mapUser = this.mapToUserDomain(user)

            console.log('user PostUsrRepo', mapUser)
            
            user?.destroy()
        
            
        
        return mapUser
    }

    private mapToUserDomain(user: Users) : User {

        const buildUser = new UserBuilder()
        .setGeneralInfo(user.username,user.email,user.userID)
        .setPassword(user.hashed_pass,user.salt)
        .build()

        
        
        
        return buildUser

    }




}