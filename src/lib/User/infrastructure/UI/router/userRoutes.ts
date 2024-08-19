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
       const user = new UserExpressRouter().create(req,res) 
    }catch(err)  {
        console.log(err)
}});

route.get('/:id', async (req,res) => {
    try {
        new UserExpressRouter().findById(req,res)
    } catch (error) {
        console.log(error)
    }
})

route.delete('/:id', async ( req,res) => {
    try {
        new UserExpressRouter().delete(req,res)
    } catch (error) {
        console.log(error)
    }
})



export default route ;