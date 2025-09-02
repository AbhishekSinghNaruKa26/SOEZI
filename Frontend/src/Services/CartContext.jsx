import axios from "axios";
import { createContext, useContext, useEffect, useState,  } from "react";



const CartContext = createContext();

export const CartProvider = ({children})=>{

    const[cart , setCart]= useState([]);
    const token = localStorage.getItem('token');

    const getCart = async()=>{
        try {

           const res  = await axios.get('http://localhost:8080/api/getCart',{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });

                setCart(res.data.items || []);

        } catch (error) {
            console.error("Error : ",error);
        }
    }

    const deleteCartItem = async(id)=>{
        try {

            const res = await axios.delete(`http://localhost:8080/api/deleteCart/${id}`,{
                headers:{Authorization:`Bearer ${token}`}
            });
            setCart((prev)=>prev.filter((item)=>item._id !== id));
            
        } catch (error) {
            console.error("Error : ", error);
        }
    }

const totalAmount = cart.reduce((acc, item) => {
  const price = item.productId?.price || 0;
  const quantity = item.quantity || 1;
  console.log("Price:", price, "Quantity:", quantity);
  return acc + price * quantity;
}, 0);

console.log("TotalAmount:", totalAmount);

    useEffect(()=>{
        getCart();
    },[]);

    return (

       <CartContext.Provider value={ {cart ,setCart , totalAmount , getCart , deleteCartItem}} >
        {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
  return useContext(CartContext);
};
