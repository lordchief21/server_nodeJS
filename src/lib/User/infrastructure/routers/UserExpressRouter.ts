import { Request, Response, Router } from "express";
import { serviceContainer } from "../../../shared/infra/ServiceContainer";

import bcrypt from 'bcryptjs'


export class UserExpressRouter {
    async create(req:Request, res: Response) {
        const {username, email, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = bcrypt.hashSync(password,salt)
        const result = serviceContainer.user.service.createUser(username,email,hashedPassword,salt)
        res.status(200).send({msg:"User Saved",user:result})
    }

    async findById(req:Request, res:Response) {
        const {id} = req.params
        const result = await serviceContainer.user.service.getUserById(id)
        
        res.status(200).send({msg:"User Founded", usr: result})
    }

    async delete(req: Request, res: Response ) {
        const {id} = req.params

        const result =  await serviceContainer.user.service.deleteUser(id)
        console.log('user',result)
        res.status(200).send({msg:"User Deleted", usr: result})
    }
    
    
}