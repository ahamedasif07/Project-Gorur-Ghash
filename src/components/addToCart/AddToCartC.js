"use client";

import { useCartContext } from "../addToCartContex/AddToCartContex";

const AddToCart = () => {
  const { addToCart } = useCartContext();
  return (
    <div>
      {addToCart.map((product) => (
        <h2 key={product.id}>{product.id}</h2>
      ))}
    </div>
  );
};

export default AddToCart;
