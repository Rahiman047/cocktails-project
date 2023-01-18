import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { isLoading, initialDrinks } = useGlobalContext();

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="section">
          <h3 className="section-title">Cocktails</h3>
          <div className="cocktails-center">
            {initialDrinks.map((eachDrink) => {
              return <Cocktail eachDrink={eachDrink} key={eachDrink.idDrink} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CocktailList;
