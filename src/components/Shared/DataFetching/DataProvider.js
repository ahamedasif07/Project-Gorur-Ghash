// context/DataContext.js
"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create a context
const DataContext = createContext();

// Create a context provider
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json"); // Make sure data.json is in the public folder
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setData(jsonData); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Provide the fetched data to the rest of the app
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

// Custom hook to use the context
export const useDataContext = () => {
  return useContext(DataContext);
};
