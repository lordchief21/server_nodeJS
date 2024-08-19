import express from 'express'
import route from './lib/User/infrastructure/UI/router/userRoutes';

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




app.listen(3160,()=>{
    console.log('Server running on 3160')
});