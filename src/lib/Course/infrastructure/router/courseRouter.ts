
import { Router} from "express";
import { CourseExpressController } from "../controller/CourseExpressController";

const router = Router();


router.route('/')
    .all((req, res, next) => {
        res.status(501).json({msj:'Not implemented'})
    })
    
    .get((req,res,next) => {
        res.status(501).json({msj:'Not implemented'})
    })
    
    .put((req,res,next) => {
        res.status(501).json({msj:'Not implemented'})
    })


router.post('/create', async (req,res)=>{
    try {
        const course = new CourseExpressController().create(req,res) 
    }catch(err)  {
            console.log(err)
}}); 

export default router