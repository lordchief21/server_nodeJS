
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
        const course = new CourseExpressController
        course.create(req,res)
    }catch(err)  {
            console.log(err)
    }   
}); 

router.get('/search/:id', async (req,res) =>{
    try {
        const courseSelected = new CourseExpressController
        courseSelected.select(req,res)
    } catch (error) {
        console.log(error)
    }
} )

export default router