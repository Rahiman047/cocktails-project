import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [initialDrinks, setInitialDrinks] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [noDrinks, setNoDrinks] = useState(false);

  const getSearchInput = (val) => {
    setSearchVal(val);
    console.log(searchVal);
  };

  const fetchData = useCallback(async () => {
    if (!searchVal) {
      try {
        const resp = await axios.get(url);
        const data = await resp.data;
        setInitialDrinks(data.drinks);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    if (searchVal) {
      try {
        const resp = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchVal}`
        );
        const data = await resp.data;
        if (data.drinks == null) {
          setNoDrinks(true);
        }
        if (data.drinks !== null) {
          setInitialDrinks(data.drinks);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  useEffect(() => {
    fetchData();
  }, [searchVal, fetchData]);

  return (
    <AppContext.Provider
      value={{ isLoading, initialDrinks, getSearchInput, noDrinks }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
