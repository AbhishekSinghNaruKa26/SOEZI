import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    image:{
        type:String,
        required:[true,"Provide Image Url"]
    },
    title:{
        type:String,
        required:[true,"Provide Title"]
    },
    rating:{
        type:Number,
        required:[true,"Provide Rating"],
        default:0
    },
    reviews:{
        type:Number,
        required:[true,"Provide Number"],
        default:0
    },
    price:{
        type:Number,
        required:[true, "Provide Price"]
    },
    orignalPrice:{
        type:Number,
        required:[true,"Provide Orignal Price"]
    }
},{timestamps:true});

const productModel = new mongoose.model('product',ProductSchema);
export default productModel;