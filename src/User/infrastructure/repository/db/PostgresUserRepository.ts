import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import Users from "../../models/UserModel.model";
import SequelizeRepository from "../../connectionDB/SequelizeConnection";
import { UserRepository } from "../../../domain/repository/UserRepository";
import { User } from "../../../domain/ model/enitities/User";



export class PostgresUserRepository implements UserRepository {
    
    
    constructor(readonly sequelizeRepository : SequelizeRepository) {
    }

    async createUser(user: User): Promise<void> {
        await this.sequelizeRepository.connectDb()
        Users
        .build({ 
            username: user.getUserName , 
            email: user.getUserEmail, 
            hashed_pass:user.getUserPassword, 
            salt:user.getUserSalt
        })
        .save()
        
    
    }

}