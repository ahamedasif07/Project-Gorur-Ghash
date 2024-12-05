import Image from "next/image";
import React from "react";

const MainCategoryBaner = ({ BanerImage }) => {
  return (
    <div>
      <div className={`pt-6 px-4`}>
        <Image src={BanerImage} alt="category-Baner"></Image>
      </div>
    </div>
  );
};

export default MainCategoryBaner;
