import mongoose from 'mongoose';


const AddToCartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[true, "Provide UserId"],
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:[true, "Provide UserId"],
    }
},{timestamps:true});

const AddToCartModel = new mongoose.model('addtocart',AddToCartSchema);
export default AddToCartModel;