import express from 'express'
import user from './controllers/userRoutes.js'

const app = express();

app.use(express.json());
-
app.use('/user',user)

app.get('/', (req, res)=>{
    res.send('Hello world')
});





app.use((req,res, next) => {
    res.status(404).send("I can't find that !!")
})




app.listen(3000,()=>{
    console.log('Server running on 3000')
});

