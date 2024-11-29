import React, { useState } from "react";
import Image from "next/image"; // Importing Next.js Image component

const AddToCartCard = ({ product }) => {
  const { id, name, category, price, imageOne, imageTwo } = product;
  const [quantity, setQuantity] = useState(2);
  const pricePerItem = price;
  const subtotal = pricePerItem * quantity;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="p-6 max-w-3xl py-22 mx-auto border rounded-lg shadow-md bg-white">
      <div className="flex items-center justify-between">
        {/* Product Image */}
        <div className="flex items-center gap-4">
          <div className="relative w-22 h-22">
            <Image
              src={imageOne}
              height={200}
              width={200}
              alt="Maroon Ribbed Cardigan"
              className="rounded"
            />
          </div>
          {/* Product Info */}
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">৳{pricePerItem.toFixed(2)}</p>
          </div>
        </div>
        {/* Quantity and Actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center border rounded-md">
            <button
              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <input
              type="number"
              readOnly
              value={quantity}
              className="w-12 text-center border-l border-r"
            />
            <button
              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <p className="font-semibold text-gray-700">৳{subtotal.toFixed(2)}</p>
        </div>
      </div>
      {/* Update Button */}
      <div className="text-right mt-4">
        <button className="px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AddToCartCard;
