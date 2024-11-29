"use client";

import { useCartContext } from "../addToCartContex/AddToCartContex";
import AddToCartCard from "./addToCartCard/addToCardCard";

const AddToCart = () => {
  const { addToCart } = useCartContext();
  return (
    <div className="max-w-3xl mx-auto">
      <div className="pt-16 ">
        <h2 className="text-5xl font-bold text-center">Cart</h2>
        <p className="w-full h-[3px] my-3 bg-gray-700 "></p>
      </div>
      <div className="py-4 mt-10 mb-4 ">
        {addToCart.map((product) => (
          <div key={product.id} className="py-5">
            <AddToCartCard product={product}></AddToCartCard>
          </div>
        ))}
      </div>
      <button className="px-6 py-2  bg-yellow-400 text-white rounded-md hover:bg-yellow-500">
        Buy Now
      </button>
    </div>
  );
};

export default AddToCart;
