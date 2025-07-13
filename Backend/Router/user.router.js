import {Router} from 'express';
import { logincontroller, userController } from '../Controller/user.controller.js';


const UserRouter = Router();

UserRouter.post('/register',userController);
UserRouter.post('/login',logincontroller);



export default UserRouter; 