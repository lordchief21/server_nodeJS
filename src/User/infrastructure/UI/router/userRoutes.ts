import { Router} from "express";
import { UserExpressRouter } from "../../routers/UserExpressRouter";

const route = Router();



//root url??
route.route('/')
    .all((req, res, next) => {
        res.status(501).json({msj:'Not implemented'})
    })
    
    .get((req,res,next) => {
        res.status(501).json({msj:'Not implemented'})
    })
    
    .put((req,res,next) => {
        res.status(501).json({msj:'Not implemented'})
    })


//Create user 
route.post('/create', async (req,res)=>{
    try {
       const user = new UserExpressRouter()
       user.create(req,res)
        
    }catch(err)  {
        console.log(err)
    }
    

});



export default route ;