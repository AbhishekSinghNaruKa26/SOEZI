import {Router} from 'express';
import { addProductController, addToWishListController, getAllProductController,  getWishListController, logincontroller, logoutController, userController } from '../Controller/user.controller.js';
import authMiddleware from '../Middleware/authMiddleware.js';


const UserRouter = Router();

UserRouter.post('/register',userController);
UserRouter.post('/loginso',logincontroller);
UserRouter.get('/logoutso',authMiddleware,logoutController);
UserRouter.post('/product',addProductController);
UserRouter.get('/getAll',getAllProductController);
UserRouter.post('/wishList',authMiddleware, addToWishListController);
UserRouter.get('/wishList',authMiddleware,getWishListController);




export default UserRouter; 