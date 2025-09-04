import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Filterr from "./Components/Filterr";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Auth from "./Others/Auth";
import WishList from "./Others/WishList";
import axios from "axios";
import AddToCart from "./Others/AddToCart";
import ProductShopping from "./Others/ProductShopping";
import { CartProvider } from "./Services/CartContext";
import { useOpen } from "./Context/StateProvider";
import SearchProduct from "./Others/SearchProduct";
import SearchProvider from "./Services/SearchProvider";
import SearchComponet from "./Components/SearchComponet";




const AppContent = () => {

    const { open, setopen } = useOpen(); // ✅ ab yaha chalega
  const [wishList, setWishList] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const token = localStorage.getItem("token");

  const fetchWishlist = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/wishList", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWishList(res.data.items.map((item) => item.productId._id));
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";
  }, [isCartOpen]);

  return (
     <>
      <Header
        wishListl={wishList}
        fetchWishlist={fetchWishlist}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filterr />
              <Main
                wishListl={wishList}
                setWishList={setWishList}
                fetchWishlist={fetchWishlist}
              />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Auth />} />
        <Route
          path="/wishlist"
          element={
            <>
              <WishList
                wishList={wishList}
                setWishList={setWishList}
                fetchWishlist={fetchWishlist}
              />
              <Footer />
            </>
          }
        />
        <Route path="/ProductShopping" element={<ProductShopping />} />
        <Route path="/search" element={<SearchComponet/>}/>
      </Routes>

      {isCartOpen && (
        <>
          <div
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm z-40"
          ></div>

          <div className="absolute overflow-hidden right-0 top-0 h-screen w-[450px] bg-white shadow-lg z-50">
            <CartProvider>
              <AddToCart
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
              />
            </CartProvider>
          </div>
        </>
      )}

      {open &&
      <>
      <div className="absolute top-0 right-0  bg-white z-50 ">
        <SearchProvider>
        <SearchProduct />
        </SearchProvider>
      </div>
       
      </>
      
    }
    </>
  )
}

export default AppContent