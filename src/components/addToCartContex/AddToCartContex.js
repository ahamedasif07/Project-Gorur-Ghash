"use client";
import { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);

  const handleAddToCart = (product) => {
    setAddToCart((prevCart) => [...prevCart, product]);
    console.log("Product added to cart:", product);
  };

  return (
    <CartContext.Provider value={{ addToCart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the context
export const useCartContext = () => useContext(CartContext);
