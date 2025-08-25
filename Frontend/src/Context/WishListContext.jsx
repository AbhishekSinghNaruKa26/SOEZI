import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [showProducts, setShowProducts] = useState([]);

  const fetchWishlist = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8080/api/wishList", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const productId = res.data.items.map(item => item.productId._id);
      setWishList(productId);
      setShowProducts(res.data.items || []);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishList, showProducts, fetchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
