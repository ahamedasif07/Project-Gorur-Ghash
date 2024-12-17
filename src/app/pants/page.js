import DisplaySpecificByType from "@/components/Shared/DisplaySpecificCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Pents",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Pents = () => {
  return (
    <div>
      <div className="md:px-10 px-4 py-6">
        <div className="p-4">
          <div className="">
            <DisplaySpecificByType category="Cargo" CategoryTitle="Cargo" />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="women-Cargo"
              CategoryTitle="women-Cargo"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              CategoryTitle="Formal-pants"
              category="Formal-pants"
            />
          </div>

          <div className="">
            <DisplaySpecificByType
              category="Women-formal-pants"
              CategoryTitle="Women-formal-pants"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="gabardine-pants"
              CategoryTitle="gabardine-pants"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="shorts-pants"
              CategoryTitle="shorts-pants"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pents;
