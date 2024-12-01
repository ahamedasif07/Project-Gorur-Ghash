"use client";
import { createContext, useContext, useState } from "react";
import { showToast } from "../tost/Toast";

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);

  const handleAddToCart = (product) => {
    const productExist = addToCart.find((item) => item.id === product.id);

    if (productExist) {
      alert("Product Alrady Added");
    } else {
      const previousCart = [...addToCart, product];
      setAddToCart(previousCart);
      console.log("Product added to cart:", product);
      alert("Product Add successfully");
    }
  };
  return (
    <CartContext.Provider value={{ addToCart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the context
export const useCartContext = () => useContext(CartContext);
