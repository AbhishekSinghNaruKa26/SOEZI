import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import Connectdb from './config/ConnectDb.js';
import UserRouter from './Router/user.router.js';


const allowedOrigins = ['https://soezi-90lm2xjof-abhisheks-projects-427066be.vercel.app/', 'http://localhost:5173'];
const app = express();
app.use(cors({
    credentials:true,
    origin:allowedOrigins
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
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



