import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import Connectdb from './config/ConnectDb.js';
import UserRouter from './Router/user.router.js';



const app = express();
app.use(cors({
    credentials:true,
    origin:'*'
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy:false
}));


const PORT = 8080 || process.env.PORT;

app.get('/',(req,res)=>{
    return res.json({
        message:"Server Is Running On The Port :"+PORT
    })
})

app.use('/api',UserRouter)

Connectdb().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server is Running On The Port : ",PORT);
    
});
})



