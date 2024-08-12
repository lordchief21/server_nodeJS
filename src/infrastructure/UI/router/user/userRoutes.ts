import { Router} from "express";
import {UserBuilder} from '../../../../utils/user';
import "../../../connectionDB/connection_postgreSQL";
import "dotenv/config.js";
import Users from "../../../models/userModel.model";
import SQLRepository  from "../../../connectionDB/connection_postgreSQL";

const route = Router();



//root url??
route.route('/')
    .all((req, res, next) => {
        
        
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
        
        

        const createuser = new UserBuilder()
        .setGeneralInfo(req.body.userEmail,req.body.email)
        .hashPass(req.body.password)
        .build()
        const conn:SQLRepository = new SQLRepository()
       
        await conn.connectDb()
        const user = Users.build({ username: createuser.username, email: createuser.email, hashed_pass:createuser.password, salt:createuser.salt }).save()
        res.status(200).send({msg:"user created and save on database"})
        
    }catch(err)  {
        console.log(err)
    }
    
   
    
    // user.save()
    // res.status(200).send({msg:"user created and save on database", user:user})

});

//Get user by id
route.route('/:id')

    .all((res,req,next) => {
        next()
    })

    .get((req,res,next)=>{
        const id = req.params.id
        res.status(200).send(`Here you go, the ID is : ${id}`)
    })

    .put((req,res,next)=>{
        res.status(501).json({msj:"Not Implemented",code:501})
    })




export default route ;