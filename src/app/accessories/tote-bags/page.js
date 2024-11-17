import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - accessories | Tote-Bags",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const ToteBags = () => {
  return (
    <div>
      <FilterByCategory
        category="tote-bags"
        CategoryTitle="Tote-bags"
        description="Can’t hold it together? Is your life falling apart just like ours? Well worry not, cuz you can totes use the new Ghash Totes to carry all your life’s shambles.

For only BDT 1000, they’ll carry all your work essentials starting from fitting a 15 inch laptop to your notebooks, wallet, phone, keys, and beauty staples. Made of durable corduroy fabric, the tote bags are both functional and stylish.

These trendy totes will be perfect for office, university or a a casual day out. Comes in four different colors to help coordinate with your outfits and be the perfect accessory."
      ></FilterByCategory>
    </div>
  );
};

export default ToteBags;
