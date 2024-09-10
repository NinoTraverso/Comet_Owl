// ExoplanetsProvider.js
import React, { createContext, useState, useEffect } from "react";
import { fetchExoplanetsData } from "../exoplanets";

export const ExoplanetsContext = createContext();

export const ExoplanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadExoplanetsData = async () => {
      try {
        const fetchedData = await fetchExoplanetsData();
        const uniqueData = Array.from(
          new Map(fetchedData.map((item) => [item.kepid, item])).values()
        );
        setData(uniqueData);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setIsLoading(false);
      }
    };

    loadExoplanetsData();
  }, []);

  return (
    <ExoplanetsContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ExoplanetsContext.Provider>
  );
};
