import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { isLoading, initialDrinks, noDrinks } = useGlobalContext();

  return (
    <div>
      {isLoading && <Loading />}
      {!noDrinks && (
        <div className="section">
          <h3 className="section-title">Cocktails</h3>
          <div className="cocktails-center">
            {initialDrinks.map((eachDrink) => {
              return <Cocktail eachDrink={eachDrink} key={eachDrink.idDrink} />;
            })}
          </div>
        </div>
      )}
      {noDrinks && <p className="section-title">No Drinks of this criteria</p>}
    </div>
  );
};

export default CocktailList;
