"use client"; // Mark the file as a Client Component
import { createContext, useContext, useEffect, useState } from "react";

// Create context
const SearchContext = createContext();

// Provider component
export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  // Update inputValue when the input field changes
  useEffect(() => {
    const inputElement = document.getElementById("input-filde");

    if (inputElement) {
      const handleInputChange = () => {
        const inputText = inputElement.value;
        const inputFieldValue = inputText.toLowerCase().trim();
        setInputValue(inputFieldValue);
      };

      inputElement.addEventListener("input", handleInputChange);

      // Cleanup event listener
      return () => {
        inputElement.removeEventListener("input", handleInputChange);
      };
    } else {
      console.error("Element with ID 'input-filde' not found in the DOM.");
    }
  }, []);

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook to use the context
export const useSearchContext = () => useContext(SearchContext);
