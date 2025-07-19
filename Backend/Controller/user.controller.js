import bcryptjs from 'bcryptjs';
import UserModel from "../Models/user.model.js";
import sendEmail from '../config/sendmail.js';
import VerifyEmailTemplate from '../utils/verifyEmailTemplate.js';
import genrateAccessToken from '../utils/genrateAccessToken.js';
import productModel from '../Models/product.model.js';
import wishListModel from '../Models/wishList.js';
import genrateRefreshToken from '../utils/genrateRefreshToken.js';





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

        const {email , password}= req.body;

        if(!email || !password){
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

        const checkPassword = await bcryptjs.compare(password,User.password);

        if(!checkPassword){
            return res.status(400).json({
                message:"Invalid Password",
                error:true,
                success:false
            })
        }

        const accessToken = await genrateAccessToken({userId :User._id});
        const refreshToken = await genrateRefreshToken(User._id)

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
            success:true,
            user:{
                id:User._id,
                email:User.email,
                name:User.userName
            }
        })



    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}

export const logoutController = async(req,res)=>{
    try {
        
        const cookieOption= {
            httpOnly:true,
            secure:true,
            sameSite:"None"
        }

        res.clearCookie('accessToken',cookieOption);
        res.clearCookie('refreshToken',cookieOption);

        return res.json({
            message:"User Logout Successfully",
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


export const addProductController = async(req ,res)=>{
    try {
        
        const { title , rating , reviews , price , orignalPrice}=req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null;

        if(!image || !title ||  !rating || !reviews || !price  || !orignalPrice){
            return res.status(400).json({
                message:"Please Provide The Title , Rating & Product Details",
                error:true,
                success:false,
                product:newProduct
            })
        };

        const newProduct = new productModel({image ,title , rating , reviews,  price, orignalPrice});
        const save = await newProduct.save();

        return res.json({
            message:"Product Add Successfully",
            error:false,
            success:true
        });

    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}

export const getAllProductController = async(req,res)=>{
    try {
        
        const products = await productModel.find().sort({createdAt :1});

        return res.json({
            message:"All fine",
            error:false,
            success:true,
            products
        })

    } catch (error) {
        return res.status(500).json({
            message:error.message  || error,
            success:false,
            error:true
        })
    }
}

export const addToWishListController = async (req,res)=>{
    try {

        const{ productId, image , title , price , orignalPrice}=req.body;
      
        if (!productId) {
      return res.status(400).json({
        message: "productId is required",
        success: false,
        error: true,
      });
    }

     console.log("REQ.BODY", req.body);
    console.log("User ID from Token:", req.userId);
        


        const newItem = new wishListModel({userId:req.userId , productId , image , title ,price, orignalPrice});
        const save= await newItem.save();
        console.log("Save Product" , save);

        return res.json({
            message:"Item added To WishList",
            success:true,
            error:false
        });
        

    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success: false,
            error:true
        })
    }
}

export const getWishListController = async(req,res)=>{
    try {

        

        const wishListItem = await wishListModel.find({userId:req.userId});
        console.log("Itmes" , wishListItem);
        
        return res.json({
            message : "Items Found Successfully",
            error:false,
            success:true,
            itmes:wishListItem
        })


    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}
