import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { isLoading } = useGlobalContext();

  return <div>{isLoading && <Loading />}</div>;
};

export default CocktailList;
