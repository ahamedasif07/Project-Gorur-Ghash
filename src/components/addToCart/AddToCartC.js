"use client";

import { useState } from "react";
import { useCartContext } from "../addToCartContex/AddToCartContex";
import AddToCartCard from "./addToCartCard/addToCardCard";
import Link from "next/link";

const AddToCart = () => {
  const { addToCart } = useCartContext();
  const [addToCartLength, setAddToCardLength] = useState(addToCart.length);

  // Calculate total price using reduce
  const totalPrice = addToCart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div>
      <div className="pt-16 max-w-screen-lg mx-auto">
        <h2 className="text-5xl font-bold text-center">Cart</h2>
        <p className="w-full h-[3px] my-8 bg-gray-700"></p>
      </div>
      <div
        className={`max-w-screen-lg mx-auto ${
          addToCartLength <= 0 ? "hidden" : "block"
        }`}
      >
        <div className="flex gap-4 justify-between">
          <div>
            <div className="py-4 mt-10 mb-4">
              {addToCart.map((product) => (
                <div key={product.id} className="py-5">
                  <AddToCartCard product={product}></AddToCartCard>
                </div>
              ))}
            </div>
            <Link href="/">
              <button className="px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">
                Retrun
              </button>
            </Link>
          </div>

          {/* total calculate  */}
          <div className=" py-4 mt-14 mb-4">
            <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg border border-gray-200">
              <h2 className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">
                Cart totals
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold text-gray-800">৳{totalPrice}</span>
              </div>

              {/* Shipping */}
              <div className="mb-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-bold text-gray-800">
                    Flat rate: ৳{totalPrice}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  Shipping options will be updated during checkout.
                </p>
                <a href="#" className="text-yellow-500 text-sm underline">
                  Calculate shipping
                </a>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center border-t pt-3 mt-4">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-lg font-bold text-green-600">
                  ৳{totalPrice}
                </span>
              </div>

              {/* Gift Card */}
              <div className="mt-6">
                <label className="block text-gray-600 mb-1" htmlFor="gift-card">
                  Have a gift card?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="gift-card"
                    placeholder="Gift card number"
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
