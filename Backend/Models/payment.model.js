import mongoose from 'mongoose';


const paymentSchema = new mongoose.Schema({
    orderId: {
        type:String,
        required:[true , "Provide OrderId"]
    },
    paymentId:{
        type:String,
    },
    signature:{
        type:String
    },
    amount:{
        type:Number,
        required:[true , "Provide Amount"]
    },
    currency:{
        type:String,
        required:[true , "Provide Currency"],
        default:"INR"
    },
    status:{
        type:String,
        required:[true , "Provide Status"],
        default:"Created"
    }
},{timestamps:true});

const paymentModel = new mongoose.model('payment', paymentSchema);
export default paymentModel;