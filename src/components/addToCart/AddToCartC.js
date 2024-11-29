"use client";

import { useCartContext } from "../addToCartContex/AddToCartContex";
import AddToCartCard from "./addToCartCard/addToCardCard";

const AddToCart = () => {
  const { addToCart } = useCartContext();
  return (
    <div>
      <div className="pt-16">
        <h2 className="text-4xl text-center">Cart</h2>
        <p className="w-full h-[3px] my-3 bg-gray-700 "></p>
      </div>
      <div className="py-4">
        {addToCart.map((product) => (
          <AddToCartCard key={product.id} product={product}></AddToCartCard>
        ))}
      </div>
    </div>
  );
};

export default AddToCart;
