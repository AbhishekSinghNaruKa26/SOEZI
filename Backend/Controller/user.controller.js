import bcryptjs from 'bcryptjs';
import UserModel from "../Models/user.model.js";
import sendEmail from '../config/sendmail.js';
import VerifyEmailTemplate from '../utils/verifyEmailTemplate.js';
import genrateAccessToken from '../utils/genrateAccessToken.js';





export const userController = async(req,res)=>{
    try {
        
        const {userName , email , password}= req.body; 

        if(!userName  || !email || !password){
            return res.status(400).json({
                message : "Please  provide The UserName , email and password",
                success:false,
                error: true
            })
        }

        const User = await UserModel.findOne({email});

        if(User){
            return res.status(400).json({
                message:"User Already Registerd",
                success:false,
                error:true
            })
        }


        const salt = await bcryptjs.genSalt(10);
        const hashpassword = await bcryptjs.hash(password,salt);

       
        const payload= {
            userName, 
            email,
            password:hashpassword
        }

        const newUser = new UserModel(payload);
        const save = await newUser.save();
        console.log("User saved : ",save );




         const verifyEmailUrl =`${process.env.FRONTEND_URL}/verify-email?=${save._id}`;

         const verifyEmail = await sendEmail({
            sendTo:email,
            subject:"Verification Email From SOEZI",
            html:VerifyEmailTemplate({
                Name:userName,
                url:verifyEmailUrl
            })
        })

        return res.json({
            message:"User Registerd Successfully",
            error:false,
            success:true
        })
        


    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            error:true,
            success: false
        })
    }
}

export const logincontroller = async(req,res)=>{
    try {

        const {email , loginPassword}= req.body;

        if(!email || ! loginPassword){
            return res.status(400).json({
                message:"Please Provide The email and password",
                success:false,
                error:true
            })
        };

        const User = await UserModel.findOne({email});

        if(!User){
            return res.status(400).json({
                message: "User Not Registered",
                error:true,
                success:false
            })
        };

        if(User.Status !== "Active"){
            return res.status(400).json({
                message:"Contact To Admin",
                error:true,
                success:false
            })
        }

        const checkPassword = await bcryptjs.compare(loginPassword,User.password);

        if(!checkPassword){
            return res.status(400).json({
                message:"Invalid Password",
                error:true,
                success:false
            })
        }

        const accessToken = await genrateAccessToken(User._id);
        const refreshToken = await genrateAccessToken(User._id);

        const cookieOption = { 
            httpOnly : true,
            secure: true, 
            sameSite:"None"
        }

        res.cookie('accessToken',accessToken,cookieOption)
        res.cookie('refreshToken',refreshToken,cookieOption)

        console.log(accessToken,refreshToken);
        

        return res.json({
            message:"User Login Successfully",
            error:false,
            success:true
        })



    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}