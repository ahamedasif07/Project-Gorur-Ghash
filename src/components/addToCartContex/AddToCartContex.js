"use client"; // Add this line to mark the file as a Client Component
import { createContext, useContext, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);

  // const showToast = (message, icon) => {
  //   Swal.fire({
  //     title: message,
  //     icon: icon,
  //   });
  // };

  const handleAddToCart = (product) => {
    const productExist = addToCart.find((item) => item.id === product.id);

    if (productExist) {
      toast.warning("Product already exists in the cart!");
    } else {
      const previousCart = [...addToCart, product];
      setAddToCart(previousCart);
      console.log("Product added to cart:", product);
      toast.success("Product successfully added to the cart.");
    }
  };
  // handle delete function
  const handleDeleteFromCart = (product) => {
    console.log(product);
    const deletedProduct = addToCart.filter((item) => item.id !== product.id);
    setAddToCart(deletedProduct);
    toast.info("Product removed from the cart successfully.");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <CartContext.Provider
        value={{ addToCart, handleAddToCart, handleDeleteFromCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

// Hook to use the context
export const useCartContext = () => useContext(CartContext);
