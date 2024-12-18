/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import Image from "next/image";
import { useCartContext } from "../addToCartContex/AddToCartContex";
import LoadingC from "../Loading/LoadingC";

const ProductDetails = ({ id }) => {
  const allProductsObj = useDataContext();
  const { handleAddToCart } = useCartContext();
  const AllProduct = allProductsObj?.data; // Use optional chaining to avoid errors if data is undefined
  console.log("All Products:", allProductsObj);

  const [productDetails, setProductsDetails] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const sizeDimensions = {
    M: { length: 28, width: 18 },
    L: { length: 30, width: 20 },
    XL: { length: 32, width: 22 },
    XXL: { length: 34, width: 24 },
  };

  // Handle click on a size
  const handleClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    if (Array.isArray(AllProduct)) {
      const filteredProduct = AllProduct.find(
        (product) => product.id === Number(id)
      );
      console.log("Filtered Product:", filteredProduct);
      setProductsDetails(filteredProduct);
    } else {
      console.error(AllProduct);
    }
  }, [id, AllProduct]);

  if (!productDetails) {
    return (
      <div>
        <LoadingC />
      </div>
    );
  }

  const handleIncrees = () => {
    setItemQuantity(itemQuantity + 1);
  };
  const handleIDicress = () => {
    if (itemQuantity <= 0) {
      console.log("");
    } else {
      setItemQuantity(itemQuantity - 1);
    }
  };

  return (
    <div className="max-w-[1100px] mt-[74px] mx-auto px-4">
      <div className="flex md:flex-row flex-col gap-20">
        <div className="md:w-[49%] w-full">
          <div className="group">
            <div
              className="relative overflow-hidden" // Ensures the zoom effect stays within bounds
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Image
                height={500}
                width={500}
                src={
                  isHover ? productDetails.imageTwo : productDetails.imageOne
                }
                alt="productImage"
                className={`transition-transform duration-500 ${
                  isHover ? "scale-150" : "scale-100"
                }`} // Adds zoom effect
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[30px] text-gray-500">Goror Gash</p>
          <h2 className="text-3xl py-3 font-[24px]">{productDetails.name}</h2>
          <div className="flex items-center gap-3">
            <h3 className="text-gray-500 font-[12px]">
              Price {productDetails.price} BDT
            </h3>
            <span className="text-white px-3 bg-brown-700 rounded-full">
              Sale
            </span>
          </div>
          <div>
            <h2 className="text-[12px] py-2">Size</h2>
            <div>
              {/* Size selector */}
              <div className="flex gap-2">
                {["M", "L", "XL", "XXL"].map((size, index) => (
                  <h2
                    key={index}
                    className={`border-2 border-gray-700 px-3 rounded-full cursor-pointer ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                    onClick={() => handleClick(size)}
                  >
                    {size}
                  </h2>
                ))}
              </div>

              {/* Display dimensions for the selected size */}
              {selectedSize && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium">
                    Selected Size:{" "}
                    <span className="font-bold">{selectedSize}</span>
                  </h3>
                  <p>
                    Length:{" "}
                    <span className="font-bold">
                      {sizeDimensions[selectedSize].length}
                    </span>
                  </p>
                  <p>
                    Width:{" "}
                    <span className="font-bold">
                      {sizeDimensions[selectedSize].width}
                    </span>
                  </p>
                </div>
              )}
            </div>
            {/* counter incresser */}

            <form className="max-w-xs mt-4 mx-auto">
              <div className="relative flex items-center max-w-[8rem]">
                <div className="flex flex-col">
                  <h2 className="text-[12px] py-2">Quantity</h2>
                  <div className="flex items-center">
                    <button
                      onClick={handleIDicress}
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="quantity-input"
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div className="bg-gray-50 border-x-0 border-gray-300 px-4 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {itemQuantity}
                    </div>
                    <button
                      onClick={handleIncrees}
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="quantity-input"
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* add to cart and bye */}
            <button
              onClick={() => handleAddToCart(productDetails)}
              className="border-black w-full border-2 text-center  py-2 hover:border-4 hover:border-black text-[12px] mt-4"
            >
              Add to cart
            </button>
            <button className="border-black w-full border-2 text-center bg-black text-white py-2 hover:border-4 hover:border-black text-[12px] mt-4">
              Buy With Cash On Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
