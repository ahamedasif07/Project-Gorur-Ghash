import DisplaySpecificByType from "@/components/Shared/DisplaySpecificCategory";
import React from "react";

const OfficeWare = () => {
  return (
    <div>
      <div className="md:px-10 px-4 py-6">
        <div className="p-4">
          <div className="">
            <DisplaySpecificByType
              category="Office-Shirt"
              CategoryTitle="Office-Shirt"
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
        </div>
      </div>
    </div>
  );
};

export default OfficeWare;
