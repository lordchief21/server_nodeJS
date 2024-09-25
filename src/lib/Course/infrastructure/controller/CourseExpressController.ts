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

    async select(req: Request,res: Response) {
        try {
            const {id} = req.params

            const findCourse = await serviceContainer.course.service.selectCourse(id)
            res.status(200).send({msg: 'Course Found', course:findCourse})
        } catch (error) {
            res.status(500).send({msg:'Course not Found',err:error}) 
        }
    }

    async delete(req:Request, res:Response) {
        try {
            const {id} = req.params
            const deleteCourse = await serviceContainer.course.service.deleteCourse(id)
            res.status(200).send({msg:'Course Deleted', course:deleteCourse}) 
        } catch (error) {
            res.status(500).send({msg:'Course Not found', err:error})
        }
    }

    async update(req:Request, res:Response) { 
        try {
            const {id} = req.params
            const updateField = req.body
            console.log('updateField', updateField)
            const updateCourse = await serviceContainer.course.service.updateCourse(id,updateField)
            res.status(200).send({msg:'Course Updated', course:updateCourse})
        } catch (error) {
            res.status(500).send({msg:'Course Not Found'})
        }
    }





}