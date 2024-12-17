import DisplaySpecificByType from "@/components/Shared/DisplaySpecificCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Tees",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Tees = () => {
  return (
    <div>
      <div className="md:px-10 px-4 py-6">
        <div className="p-4">
          <div className="">
            <DisplaySpecificByType
              category="Premium-T-Shirts"
              CategoryTitle="Premium-T-Shirts"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="women-premium-tShirt"
              CategoryTitle="women-Premium-T-Shirts"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              CategoryTitle="Basic-T-Shirts"
              category="Basic-T-Shirts"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              CategoryTitle="basic-tees"
              category="basic-tees"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="Drop-Tees"
              CategoryTitle="Drop-Tees"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="women-drop-tees"
              CategoryTitle="women-drop-tees"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tees;
