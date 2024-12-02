"use client"; // Add this line to mark the file as a Client Component
import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);

  const showToast = (message, icon) => {
    Swal.fire({
      title: message,
      icon: icon,
    });
  };

  const handleAddToCart = (product) => {
    const productExist = addToCart.find((item) => item.id === product.id);

    if (productExist) {
      showToast("Product Already Added", "warning");
    } else {
      const previousCart = [...addToCart, product];
      setAddToCart(previousCart);
      console.log("Product added to cart:", product);
      showToast("Product Added Successfully", "success");
    }
  };
  // handle delete function
  const handleDeleteFromCart = (product) => {
    console.log(product);
    const deletedProduct = addToCart.filter((item) => item.id !== product.id);
    setAddToCart(deletedProduct);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, handleAddToCart, handleDeleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the context
export const useCartContext = () => useContext(CartContext);
