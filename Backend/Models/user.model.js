import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:[true,"Provide UserName"]
    },
    email:{
        type:String,
        required:[true,"Provide email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Provide Password"]
    },
    Status:{
        type:String,
        enum:["Active" , "Inactive" , "Suspended"],
        default:"Active",
    },
    refreshToken:{
        type:String,
        default:""
    }
},{timestamps:true})

const UserModel = new mongoose.model('user',UserSchema);
export default UserModel;