import { Request,Response,Router } from "express";
import { serviceContainer } from "../../../shared/infra/ServiceContainer";





export class CourseExpressController {

    async create( req:Request,res:Response) {
        try {
            const {courseName,description,courseImage,price,isDisable} = req.body

            const result = serviceContainer.course.service.createCourse(courseName,description,Number(price),courseImage,Boolean(isDisable))
            res.status(200).send({msg:'Course Created', course:result})
        } catch (error) {
          res.status(500).send({msg:'Error to create Course',err:error})  
        }


    }





}