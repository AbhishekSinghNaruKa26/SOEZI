import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const genrateAccessToken = ({userId})=>{
        
        const token  =  jwt.sign({id:userId},
            process.env.SECRETE_ACCESS_KEY,
            {expiresIn:'5h'}
        );
        return token;

    
}
export default genrateAccessToken;