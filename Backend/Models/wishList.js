import mongoose from 'mongoose';

    const WishListSchema = new mongoose.Schema({
        userId :{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users',
            required:true
        },
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'products',
            required:true,
        },
        image:String,
        title:String,
        price:Number,
        orignalPrice:Number
    },{timestamps:true})

    const wishListModel = new mongoose.model('wishlist' ,WishListSchema);
    export default wishListModel;

