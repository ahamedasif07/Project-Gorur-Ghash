"use client"; // Add this line to mark the file as a Client Component
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

// Create context
const SearchContext = createContext();

// Provider component
export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  // Update inputValue when the input field changes
  useEffect(() => {
    const inputField = document.getElementById("input-filde");
    if (inputField) {
      const handleInputChange = () => {
        setInputValue(inputField.value);
      };

      // Add event listener
      inputField.addEventListener("input", handleInputChange);

      // Cleanup event listener on unmount
      return () => {
        inputField.removeEventListener("input", handleInputChange);
      };
    }
  }, []);

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      Swal.fire("Please enter a search term");
    } else {
      Swal.fire(`Searching for: ${inputValue}`);
    }
  };

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook to use the context
export const useSearchContext = () => useContext(SearchContext);
