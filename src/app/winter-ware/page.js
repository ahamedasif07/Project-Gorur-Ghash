import DisplaySpecificByType from "@/components/Shared/DisplaySpecificCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Winter-ware",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const WinterWare = () => {
  return (
    <div>
      <div className="md:px-10 px-4 py-6">
        <div className="p-4">
          <div className="">
            <DisplaySpecificByType
              category="Bomber-jacket"
              CategoryTitle="Bomber-jacket"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="women-Bomber-jacket"
              CategoryTitle="women-Bomber-jacket"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              CategoryTitle="Cord-jacket"
              category="Cord-jacket"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              CategoryTitle="women-Cord-jacket"
              category="women-Cord-jacket"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="Turtleneck"
              CategoryTitle="Turtleneck"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="women-Turtleneck"
              CategoryTitle="women-Turtleneck"
            />
          </div>

          <div className="">
            <DisplaySpecificByType category="Hoddie" CategoryTitle="Hoddie" />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="women-Hoddie"
              CategoryTitle="women-Hoddie"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterWare;
