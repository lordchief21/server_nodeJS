import express from 'express'
import route from './infrastructure/UI/router/user/userRoutes'

const app = express();

app.use(express.json());
-
app.use('/user',route)

app.get('/', (req, res)=>{
    res.send('Hello world')
});





app.use((req,res, next) => {
    res.status(404).send("I can't find that !!")
})




app.listen(3000,()=>{
    console.log('Server running on 3000')
});