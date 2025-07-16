import {Router} from 'express';
import { addProductController, getAllProductController, logincontroller, userController } from '../Controller/user.controller.js';


const UserRouter = Router();

UserRouter.post('/register',userController);
UserRouter.post('/login',logincontroller);
UserRouter.post('/product',addProductController);
UserRouter.get('/getAll',getAllProductController);



export default UserRouter; 