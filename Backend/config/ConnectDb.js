import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const Connectdb = async()=>{
    try {
        if(!process.env.MONGODB_URI){
            throw new Error("Please provide the MONGODB_URI in the dotenv file");
        }

       await mongoose.connect(process.env.MONGODB_URI);
       console.log("Database Connected Successfully");
       


    } catch (error) {
        console.log("Connection Failed",error);
        
    }
}
export default Connectdb;