import {Router} from 'express';
import { addProductController, addToCartController, addToWishListController, createPaymentOrderController, deleteCartController, deleteWishListController, getAllProductController,  getToCartController,  getWishListController, logincontroller, logoutController, userController } from '../Controller/user.controller.js';
import authMiddleware from '../Middleware/authMiddleware.js';



const UserRouter = Router();

UserRouter.post('/register',userController);
UserRouter.post('/loginso',logincontroller);
UserRouter.get('/logoutso',authMiddleware,logoutController);
UserRouter.post('/product',addProductController);
UserRouter.get('/getAll',getAllProductController);
UserRouter.post('/wishList',authMiddleware, addToWishListController);
UserRouter.get('/wishList',authMiddleware,getWishListController);
UserRouter.delete('/wishList/:id' ,authMiddleware,deleteWishListController);
UserRouter.post('/addToCart' ,authMiddleware,addToCartController);
UserRouter.get('/getCart',authMiddleware,getToCartController);
UserRouter.delete('/deleteCart/:id' , authMiddleware , deleteCartController );
UserRouter.post('/order', createPaymentOrderController);


    

export default UserRouter; 