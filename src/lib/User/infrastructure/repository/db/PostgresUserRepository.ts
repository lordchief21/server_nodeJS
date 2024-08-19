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

    async editUser(user:User): Promise<User> {
        
        const usertoFind = await Users.findOne({
            where: {
                userID: user.getUserId
            }
        })
        
        if(!usertoFind) throw new Error('User Not Found')
            const test = this.mapToUserDomain(usertoFind)
            const userInfo = test.infoUser




            console.log('PostgresRepoEditUserInfo', userInfo)
            const result = this.mapToUserDomain(await usertoFind.set(
                {username:user.getUserName != '' ? user.getUserName: usertoFind.username,
                email: user.getUserEmail != '' ? user.getUserEmail : usertoFind.email
                }).save()) 
            console.log('PostgresRepoEdit', result)
            return result


    }

    private mapToUserDomain(user: Users) :User {
       
        const buildUser = new UserBuilder()
            .setGeneralInfo(user.username,user.email,user.userID)
            .setPassword(user.hashed_pass,user.salt)
            .build()
            
            return buildUser

        

        
        
        
        

    }




}