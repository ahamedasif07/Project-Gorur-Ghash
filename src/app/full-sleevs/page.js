import DisplaySpecificByType from "@/components/Shared/DisplaySpecificCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Full-Sleevs",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const FullSleevs = () => {
  return (
    <div>
      <div className="md:px-10 px-4 py-6">
        <div className="p-4">
          <div className="">
            <DisplaySpecificByType
              category="Flannels"
              CategoryTitle="Flannels"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              CategoryTitle="Cord-Shirts"
              category="Cord-Shirts"
            />
          </div>

          <div className="">
            <DisplaySpecificByType
              category="Rayon Linen Blend Shirts"
              CategoryTitle="Rayon Linen Blend Shirts"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="Band-Collar"
              CategoryTitle="Band-Collar"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="Button-down"
              CategoryTitle="Button-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullSleevs;
