import React, { useEffect, useState } from 'react'
import axios from 'axios';

const WishList = () =>{

  
  useEffect(()=>{
    axios.get('http://localhost:8080/api/getAll')
    .then((res)=>{
      console.log("Data From Backend in WishList :",res.data);
      setShowProducts(res.data.products);
    })
    .catch((error)=>{
      console.erorr("Error",error);
    })
  },[])

  const[showProducts , setShowProducts]= useState([]);
  
  return (
    <div className='border-t-1 border-gray-300'>

      <div className='heading flex justify-center mt-2 text-7xl tracking-wider font-bold'>
        WishList
      </div>

      <div className=' mx-45 grid grid-cols-3'>

        {showProducts.map((product,index)=>(
          <div key={index} className='flex mt-6 w-100'>
          <div className='img'><img className='h-[100px] w-[100px]' src={product.image} alt="" /></div>

          <div className='pl-5 '>
          <div className='title'>{product.title}</div>
          <div className='price pt-1'>from Rs. {product.price} <span className='line-through text-gray-400'>&nbsp; Rs.{product.orignalPrice}</span></div>
          <div>
            <button className='border-b-1 border-gray-500 text-[13px] text-gray-700'> Remove</button>
          </div>

          </div>

        </div>
        ))
        }

      </div>

    
      <div className='flex justify-center mt-8  '>
        <div className='bg-pink-400 px-4 py-3 rounded text-white '>There are no products in your wishlist!</div> 
      </div>
    

    </div>
  )
}

export default WishList