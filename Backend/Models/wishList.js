import mongoose from 'mongoose';

    const WishListSchema = new mongoose.Schema({
        userId :{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:[true, "Provide userId"],
        },
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'product',
            required:[true, "Provide ProductId"]
        },
    
    },{timestamps:true})

    const wishListModel = new mongoose.model('wishlist' ,WishListSchema);
    export default wishListModel;

