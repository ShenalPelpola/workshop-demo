import React, { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { useThrottle } from "./useThrottle";

export const DebounceExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Execute API call or any side effect based on debounced term
      fetchResults(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <h4>Search Value: {searchTerm}</h4>
      <h4>Debounced search Value: {debouncedSearchTerm}</h4>
    </>
  );
};

const fetchResults = (term) => {
  console.log("Fetching results for:", term);
};
