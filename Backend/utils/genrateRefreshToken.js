import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserModel from '../Models/user.model.js';
dotenv.config();


const genrateRefreshToken = async(userId)=>{
  
        
        const token = jwt.sign({id:userId},
            process.env.SECRETE_REFRESH_KEY,
            {expiresIn : '7d'}
        );

        const updateRefreshToken = await UserModel.findByIdAndUpdate(
            userId,
            {refreshToken: token},
            {new:true}
        )

        return token;
}
export default genrateRefreshToken;