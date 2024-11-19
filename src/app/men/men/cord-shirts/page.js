import FilterByCategory from "@/components/Shared/FilterByCategory";
export const metadata = {
  title: "Gorur Ghash - Men | Shirts | Cord",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const CordShirts = () => {
  return (
    <div>
      <FilterByCategory
        category="cord-shirts"
        CategoryTitle="cord-shirts"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default CordShirts;
