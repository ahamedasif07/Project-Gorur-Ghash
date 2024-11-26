/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import Image from "next/image";

const ProductDetails = ({ id }) => {
  const allProductsObj = useDataContext();
  const AllProduct = allProductsObj?.data; // Use optional chaining to avoid errors if data is undefined
  console.log("All Products:", allProductsObj);

  const [productDetails, setProductsDetails] = useState(null);

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Image
          src={productDetails.imageOne}
          alt="Product image"
          width={500}
          height={500}
        />
      </div>
      {/* You can add more product details here */}
    </div>
  );
};

export default ProductDetails;
