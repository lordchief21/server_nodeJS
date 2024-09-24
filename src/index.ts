import express from 'express'
import userRoute from './lib/User/infrastructure/UI/router/userRoutes';
import courseRoute from './lib/Course/infrastructure/router/courseRouter'
const app = express();

app.use(express.json()); 
-
app.use('/user',userRoute)
app.use('/course',courseRoute)

app.get('/', (req, res)=>{
    res.send('Hello world')
});

app.use((req,res, next) => {
    res.status(404).send("I can't find that !!")
})




app.listen(3160,()=>{
    console.log('Server running on 3160')
});