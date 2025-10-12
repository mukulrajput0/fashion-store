// src/context/SearchContext.jsx
import { createContext, useContext, useState } from "react";

// Create Context
const SearchContext = createContext();

// Provider Component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook for easy access
export const useSearch = () => useContext(SearchContext);
