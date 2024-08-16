import { Request, Response, Router } from "express";
import { PostgresUserRepository } from "../repository/db/PostgresUserRepository";
import SequelizeRepository from "../connectionDB/SequelizeConnection";
import { serviceContainer } from "../../../shared/infra/ServiceContainer";

import bcrypt from 'bcryptjs'


export class UserExpressRouter {
    async create(req:Request, res: Response) {
        const {username, email, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = bcrypt.hashSync(password,salt)
        await serviceContainer.user.create.userCreate(username,email,hashedPassword,salt)

        res.status(200).send("User Saved")
    }
}