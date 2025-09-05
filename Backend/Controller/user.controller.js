import bcryptjs from 'bcryptjs';
import Razorpay from 'razorpay';
import UserModel from "../Models/user.model.js";
import sendEmail from '../config/sendmail.js';
import VerifyEmailTemplate from '../utils/verifyEmailTemplate.js';
import genrateAccessToken from '../utils/genrateAccessToken.js';
import productModel from '../Models/product.model.js';
import wishListModel from '../Models/wishList.js';
import genrateRefreshToken from '../utils/genrateRefreshToken.js';
import AddToCartModel from '../Models/AddToCart.js';
import paymentModel from '../Models/payment.model.js';
import crypto from 'crypto';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';









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
        console.log("user", User);
        

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
            token:accessToken,
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
       

        if(!req.file || !title ||  !rating || !reviews || !price  || !orignalPrice){
            return res.status(400).json({
                message:"Please Provide The Title , Rating & Product Details",
                error:true,
                success:false,
                
            })
        };

        const uploadResult = await cloudinary.uploader.upload(req.file.path ,{
            folder : "SOEZI Products",
             resource_type: "auto",
        })
        console.log("Cloudinary Upload:", uploadResult);

        const newProduct =  new productModel({image :uploadResult.secure_url ,title , rating , reviews,  price, orignalPrice});
        const save = await newProduct.save();
        console.log("Save",save);
        

        return res.json({
            message:"Product Add Successfully",
            error:false,
            success:true,
            product:newProduct
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

        const{productId}=req.body;
        console.log("Received productId:", productId);
        console.log("user Id",req.userId);
        

        if(!productId){
            return res.status(400).json({
                message:"Please Provide The Product Id",
                error:true,
                success:false
            })
        };

        const product = await productModel.findById(productId);
        console.log("product",product);
        
                                                                                      
        if(!product){
            return res.status(400).json({
                message:"Product Not Found",
                error:true,
                success:false
            })
        };

        const existing = await wishListModel.findOne({userId:req.userId , productId});

        if(existing){
            return res.status(200).json({
                message:"Product Already Added ",
                error:true,
                success:false,
                alreadyExists:true
            })
        };

        const newItem = await new wishListModel({
            userId:req.userId,
            productId:product._id
        });

        const save = await newItem.save();
        console.log("Save ", save);

        return res.json({
            message:"Item Added To WishList Succesfully",
            error:false,
            success:true,
            items:save

        })
        
        

    } catch (error) {
        console.error("❌ Error in addToWishListController:", error.message || error);
        return res.status(500).json({
            message:error.message || error,
            success: false,
            error:true
        })
    }
}

export const getWishListController = async(req,res)=>{
    try {

        
        const wishListItem = await wishListModel.find({userId:req.userId}).populate('productId');
        console.log("Itmes" , wishListItem);
        
        return res.json({
            message : "Items Added Successfully",
            error:false,
            success:true,
            items:wishListItem
        })


    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}

export const deleteWishListController = async(req,res)=>{
    try {
        
        const deletee = await wishListModel.findOneAndDelete({userId:req.userId , productId:req.params.id});
        console.log("Delete : ",deletee);

        return res.json({
            message:"Product Deleted Successfully",
            success:true,
            error:false
        })


        

    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}

export const addToCartController = async(req,res)=>{
    try {
        
        const {productId} = req.body ;

        if(!productId){
            return res.status(400).json({
                message : "Please Provide The ProductId",
                error:true,
                success:false
            })
        }

        const productTOCart = await productModel.findById(productId);
        console.log("Product available in the cart :",productTOCart);

        const newItem =  await AddToCartModel({
            userId:req.userId,
            productId:productTOCart._id
        })
        
        const save = await newItem.save();
        console.log("Item in The Cart : " ,save);

        return res.json({
            message:"Item added To the successfully",
            success:true,
            error:false,
            save
        })
        

    } catch (error) {
        console.log("Error",error);
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}

export const getToCartController = async(req,res)=>{
    try {

       const cartProduct =  await AddToCartModel.find({userId:req.userId}).populate('productId');
       console.log("Cart Product  : ", cartProduct);

       return res.json({
        message:"Item Added To Cart Successfully",
        success:true,
        error:false,
        items:cartProduct
       });
        
        
    } catch (error) {
        return res.status(500).json({
            message:error.message|| error,
            success:false,
            error:true
        })
    }
}

export const deleteCartController = async(req,res)=>{
    try {
        
       const deletee =  await AddToCartModel.findOneAndDelete({userId:req.userId , _id:req.params.id});
       console.log("Deleting from cart with userId:", req.userId, "and productId:", req.params.id);


       return res.json({
        message:"Product Deleted Successfully",
        error:false,
        success:true
       })


    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            error:true,
            success:false
        })
    }

}

const razorpay = new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
})

export const createPaymentOrderController = async(req,res)=>{
    try {
        const { amount } = req.body;  // ✅ destructuring
    console.log("Request Body: ", req.body);
        const options = {
            amount : amount*100,
            currency:"INR",
            receipt:`receipt${Date.now()}`
        };

        if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }
        const order = await razorpay.orders.create(options);
        console.log("Order :",order);

        const payment = new paymentModel({
            orderId:order.id,
            amount:options.amount,
            currency:options.currency,
            status:"Created"
        });
        await payment.save();

        return res.json({
            message: "Order Created Successfully",
            success:true ,
            error:false,
            order
        })
        

    } catch (error) {
        console.error("Payment Error:", error.message);
        return res.status(500).json({
            message:error.message || error,
            success : false,
            error:true
        })
    }
}

export const verifyPaymentController  = async(req, res)=>{
    try {
        
        const {razorpay_order_id , razorpay_payment_id , razorpay_signature , amount} = req.body ; 

        if(!razorpay_order_id || !razorpay_payment_id || !razorpay_signature){
            return res.status(400).json({
                message : "Please Provide All The Required Fields ", 
                success : false , 
                error : true 
            })
        };

        const sign = razorpay_order_id + '|' + razorpay_payment_id ; 

        const expectedSign = crypto
        .createHmac('sha256' , process.env.RAZORPAY_KEY_SECRET)
        .update(sign.toString())
        .digest('hex')
        console.log("Expected Sign :" , expectedSign);
        

        if(expectedSign === razorpay_signature){
            const payment = new paymentModel({
                orderId:razorpay_order_id,
                paymentId: razorpay_payment_id,
                signature:razorpay_signature,
                amount:amount,
                currency:"INR",
                status:"Paid"
            })
            await payment.save();

            return res.json({
                message : "Payment Verify Successfully ",
                error : false , 
                success : true , 
                payment 
            })
        }else{
            return res.status(400).json({
                message : "Invalid Signature", 
                success : false , 
                error : true 
            })
        }


    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            success : false,
            error: true
        })
    }
}


export const searchProductController = async(req,res)=>{
    try {

        const query  = req.query.q || req.query.query ;

        if(!query){
            return res.status(400).json({
                message  : "Please Provide The Query",
                success : false , 
                error : true
            })
        }

        const product = await productModel.find({
            title:{$regex :query , $options:"i"}
        
        })
          console.log("Query:", query);
        console.log("Products : " , product);

        return res.json({
            
            message : "Product Found Successfully",
            error : false ,
            sucess : true,
            product:product
        })
         

    } catch (error) {
                console.error("Search API Error:", error);   
        return res.status(500).json({
            message: error.message || error , 
            success :false ,
            error : true
        })
    }
}


export const cloudinaryImageUploadController = async(req, res)  =>{
    try {

        const file = req.file ; 

        if(!file){
            return res.status(400).json({
                message : "Please Provide The File",
                success : false , 
                error : true
            })
        };

        const result = await cloudinary.uploader.upload(file.path ,{
            folder:'SOEZI.IN',
        });

        fs.unlinkSync(file.path);


        return res.json({
            message: "Image Uploaded Sucessfully",
            sucess : true,
            error: false,
            url: result.secure_url,
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error ,
            sucess: false , 
            error: true

        })
    }
}