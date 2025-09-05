import {Router} from 'express';
import { addProductController, addToCartController, addToWishListController, cloudinaryImageUploadController, createPaymentOrderController, deleteCartController, deleteWishListController, getAllProductController,  getToCartController,  getWishListController, logincontroller, logoutController, searchProductController, userController, verifyPaymentController } from '../Controller/user.controller.js';
import authMiddleware from '../Middleware/authMiddleware.js';
import  upload from '../Middleware/multer.js';




const UserRouter = Router();

UserRouter.post('/register',userController);
UserRouter.post('/loginso',logincontroller);
UserRouter.get('/logoutso',authMiddleware,logoutController);
UserRouter.post('/product',upload.single("image"),addProductController);
UserRouter.get('/getAll',getAllProductController);
UserRouter.post('/wishList',authMiddleware, addToWishListController);
UserRouter.get('/wishList',authMiddleware,getWishListController);
UserRouter.delete('/wishList/:id' ,authMiddleware,deleteWishListController);
UserRouter.post('/addToCart' ,authMiddleware,addToCartController);
UserRouter.get('/getCart',authMiddleware,getToCartController);
UserRouter.delete('/deleteCart/:id' , authMiddleware , deleteCartController );
UserRouter.post('/order', createPaymentOrderController);
UserRouter.post('/verify' , verifyPaymentController);
UserRouter.get('/search' , searchProductController);
UserRouter.post('/upload',upload.single('image'), cloudinaryImageUploadController)


    

export default UserRouter; 