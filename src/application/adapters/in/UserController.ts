import { Request, Response } from "express";
import { User } from "../../../core/domain/enitities/User";
import { UserUseCase } from "../../../core/use-case/UserUseCase";
import bcrypt from 'bcryptjs'


export class UserController {
    constructor(readonly userUseCase: UserUseCase) {}

    public async createUser(req: Request, res: Response): Promise<void> {
      const {email,password} = req.body
      const userSalt =bcrypt.genSaltSync(10)
      const userPassword = await bcrypt.hash(password, userSalt)
      const user = this.userUseCase.executeCreateUser(email,userPassword,userSalt)
      await
      res.status(200).json(user)  
    }
}