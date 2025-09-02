import React, { useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaShippingFast } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import handlePayment from '../Services/PaymentServices.jsx'
import {useCart} from '../Services/CartContext.jsx'

const AddToCart = ({ isCartOpen, setIsCartOpen }) => {

  const {cart , deleteCartItem , totalAmount }= useCart();

  return (

    <div className=' fixed h-screen  z-50 bg-white'>

      {/* for Cross and cart  */}
    <div className="flex  justify-between bg-[#f3f1f2] px-4 py-4 ">

      <div className='font-bold '>Your Cart (1)</div>
      <div onClick={() => setIsCartOpen(!isCartOpen)} className="font-bold text-xl cursor-pointer "><RxCross1 /></div>

    </div>

    {/* for Shiiping */}

    <div className='py-4 '>

      <div className='flex justify-center font-[500]'>Congrats ! You have achieved Reward </div>
      <span className=' bg-[#fe5ad6] rounded-full absolute top-25 right-3 p-5 z-10  '></span>
      <div className='relative mx-7 my-5 rounded-full w-98 h-2 bg-black  '><FaShippingFast className='absolute text-white left-93  bottom-[-8px]  z-40  text-xl' /><span className='w-5 absolute right-5 text-[12px] top-8'> Free Shipping</span></div>

    </div>

    {/* for Product  */}
    <div className='overflow-y-auto h-120' >

      {cart.map((product , index)=>(
      <div key={index} className='flex   gap-2 mx-12 pt-12 text-sm tracking-wide border-b-2 border-gray-600 pb-6'>

      <div className='h-[80px] w-[80px] '><img className='rounded-xl' src={product.productId.image} alt="Image Not found" /></div>

      <div className='flex  justify-between'>
      <div className='leading-5 pl-4'>
        <div className='font-bold'>{product.productId.title}</div>
        <div><span className='font-bold'>Kit :</span> Ready  TO Wear Kit </div>
        <div><span className='font-bold'>Length :</span> Long</div>
        <div><span className='font-bold'>Shape :</span> Oval </div>

        <div className='pt-4 gap-12 flex '>
          <div>
          <span className='w-6 h-6 px-3 py-1 rounded-full  bg-gray-300'>-</span>
          <span className=''>&nbsp;  1 &nbsp;</span>
          <span className='w-6 h-6 px-3 py-1 rounded-full bg-gray-300'>+</span>
          </div>

          <div className=''>
            <span className='line-through text-[10px]'>Rs. {product.productId.orignalPrice}</span>
            <span className='font-bold pl-2'>Rs. {product.productId.price}</span>
          </div>

        </div>

      
      </div>

      <span onClick={()=>deleteCartItem(product._id)} className='absolute right-12'>
        <RiDeleteBin6Line className='text-lg mt-1' />
      </span>

      </div>
   
    
    </div>
      ))}

   

    

    </div>

    {/* Discount Checkout Cart  */}
    <div className='w-[450px] bottom-2 fixed'>
    <div className=' mx-10 bg-[#f8f8f8] '>

      <div className='text-green-800 font-bold py-2'>5% OFF on Prepaid Orders</div>

      <div onClick={()=>handlePayment(totalAmount)} className='bg-black px-4 py-3 rounded-xl  text-white flex justify-between w-full'> 
        <span>Checkout</span>
        <span>images  </span>
      </div>

      <div className='py-2 text-sm flex font-bold justify-center'>View Cart </div>


    </div>
    </div>


    
    </div>
  );
};

export default AddToCart;
