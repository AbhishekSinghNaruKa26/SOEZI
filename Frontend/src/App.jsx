import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Header from './Components/Header'
import Filterr from './Components/Filterr'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Auth from './Others/Auth';
import WishList from './Others/WishList';
import React,  {useEffect, useState} from 'react';
import axios from 'axios';
import AddToCart from './Others/AddToCart';
import ProductShopping from './Others/ProductShopping';
import { CartProvider } from "./Services/CartContext";


function App() {
  const[wishList , setWishList]= useState([]);
  const[isCartOpen , setIsCartOpen] = useState(false);
  const token =localStorage.getItem("token");


  const fetchWishlist = async()=>{
    try {
     const res =  await axios.get('http://localhost:8080/api/wishList',
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      } 
     );
     console.log("Full Response :",res);
     console.log("Data" , res.data);
     console.log("Items",res.data.items);
     
     

      setWishList(res.data.items.map(item => item.productId._id));
    } catch (error) {
      console.error("Error" , error);
    }
  };
  useEffect(()=>{
    fetchWishlist();
  },[]);
useEffect(() => {
  if (isCartOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [isCartOpen]);




  return (
    <>

    <Router>
      <Header wishListl={wishList} fetchWishlist={fetchWishlist} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}  />


      <Routes>

        <Route path='/' element={
          <>
          <Filterr/>
          <Main wishListl={wishList} setWishList={setWishList} fetchWishlist={fetchWishlist}  />
          <Footer/>
          </>
        } />
        
        <Route path='/login' element={<Auth />} />

        <Route path='/wishlist' element={
          <>
    
          <WishList wishList={wishList} setWishList={setWishList} fetchWishlist={fetchWishlist} />
          <Footer/>
          </>
        } 
        />

        <Route path='/ProductShopping' element={<ProductShopping/>} />

      </Routes>


      {isCartOpen && 
      <>
      
      <div onClick={()=>setIsCartOpen(!isCartOpen)} className='absolute inset-0 bg-black opacity-40 backdrop-blur-sm z-40'></div>

      <div className='absolute overflow-hidden  right-0 top-0 h-screen  w-[450px] bg-white shadow-lg z-50'>
        <CartProvider>
        <AddToCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        </CartProvider>
      </div>
      </>
      }
      
       

    </Router>

    </>
  )
}

export default App
