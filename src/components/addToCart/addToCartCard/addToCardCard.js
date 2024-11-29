import React, { useState, useEffect } from "react";
import Image from "next/image"; // Importing Next.js Image component
import { RiDeleteBinLine } from "react-icons/ri";

const AddToCartCard = ({ product }) => {
  const { id, name, category, price, imageOne, imageTwo } = product;
  const [quantity, setQuantity] = useState(2);
  const [subtotal, setSubtotal] = useState(price * quantity);

  const pricePerItem = price;

  // Update subtotal dynamically when quantity changes
  useEffect(() => {
    setSubtotal(pricePerItem * quantity);
  }, [quantity, pricePerItem]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div>
      <div className="p-6 max-w-3xl mx-auto border rounded-lg shadow-md bg-white">
        <div className="flex items-center justify-between">
          {/* Product Image */}
          <div className="flex items-center gap-4">
            <div className="relative w-22 h-22">
              <Image
                src={imageOne}
                height={200}
                width={200}
                alt={name}
                className="rounded"
              />
            </div>
            {/* Product Info */}
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-gray-500">
                ৳{pricePerItem.toFixed(2)}
              </p>
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
            <p className="font-semibold text-gray-700">
              ৳{subtotal.toFixed(2)}
            </p>
          </div>
        </div>
        {/* Total Price and Actions */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-lg font-semibold text-gray-700">
              Total: ৳{subtotal.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[18px] text-gray-700 hover:text-red-500 transition-all duration-300">
              <RiDeleteBinLine />
            </button>
            <button className="px-6 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartCard;
