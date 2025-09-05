import React, { useEffect, useState } from 'react'
import axios from 'axios';


const WishList = ({wishList,setWishList}) =>{

  
  const[showProducts , setShowProducts]= useState([]);
   const token = localStorage.getItem("token");
  

  const fetchWishlist = async () => {
  try {
   
    const res = await axios.get('http://localhost:8080/api/wishList', {
      headers: {
        Authorization: `Bearer ${token}`,
      },

    });

    console.log("Wishlist Fetched:", res.data);
    // ✅ Ensure data.items is array
    
    const productId = res.data.items.map(item => item.productId._id);
    setWishList(productId);
    setShowProducts(res.data.items || []); 
  
    

  } catch (error) {
    console.error("Error fetching wishlist:", error);
  }
};
useEffect(() => {
  console.log("Updated WishList:", wishList);
}, [wishList]);
useEffect(()=>{
  fetchWishlist();
},[]);

const removeProduct = async(id)=>{
  try {
    axios.delete(`http://localhost:8080/api/wishlist/${id}`,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      setShowProducts(prev => prev.filter(item => item!== id));
       await fetchWishlist();
      console.log("Remove Button Clicked");
  } catch (error) {
    console.error("Error:",error);
  }
}  

  return (
    <>

    <div className='border-t-1 border-gray-300'>

        


      <div className='heading flex justify-center mt-2 text-7xl tracking-wider font-bold'>
        WishList
      </div>


      <div className=' mx-45 grid grid-cols-3'>
       

        {showProducts.map((product,index)=>(
          <div key={index} className='flex mt-6 w-100'>
          <div className='img'><img className='h-[100px] w-[100px]' src={product.productId.image} alt="" /></div>
          <div className='pl-5 '>
          <div className='title'>{product.productId.title}</div>
          <div className='price pt-1'>from Rs. {product.productId.price} <span className='line-through text-gray-400'>&nbsp; Rs.{product.productId.orignalPrice}</span></div>
          <div>
            <button onClick={()=>removeProduct(product.productId._id)} className='border-b-1 border-gray-500 text-[13px] text-gray-700'> Remove</button>
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
    </>
  )
}

export default WishList