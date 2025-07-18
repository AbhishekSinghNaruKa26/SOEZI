import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const authMiddleware = async(req,res,next)=>{
    try {
        
        const token = req.cookies?.accessToken || req.headers?.authorization.split(" ")[1];
        console.log("Token " ,token);

        if(!token){
            return res.status(400).json({
                message:"Please provide The Token",
                erroe:true,
                success : false
            })
        };


        const decode = await jwt.verify(token , process.env.SECRETE_ACCESS_KEY);
        console.log("Decode " ,decode);

        if(!decode){
            return res.status(400).json({
                message:"Unauthorized Access",
                success:false,
                erorr:true
            })
        }
         
        req.userId = decode.id;
        // console.log(userId , id);
        
        next();
        

    } catch (error) {
       return res.status(500).json({
        message:error.message || error,
        success:false,
        error:true
       })
    }
}
export default authMiddleware;