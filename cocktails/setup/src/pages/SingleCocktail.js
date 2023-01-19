import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [drink, setDrink] = useState([]);
  const [isLoadingComp, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchSingleDrinkData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        //console.log(response);
        const data = await response.data;
        //console.log(data);
        setDrink(data.drinks[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleDrinkData();
  }, [id]);

  return (
    <>
      {isLoadingComp && <Loading />}
      {!isLoadingComp && (
        <div className="section cocktail-section">
          <button className="btn btn-primary" type="button">
            <Link to="/">Back Home</Link>
          </button>
          <h2 className="section-title">{drink.strDrink}</h2>
          <div className="drink">
            <img src={drink.strDrinkThumb} />
            <div className="drink-info">
              <p>
                <span className="drink-data">Name:</span>
                {drink.strDrink}
              </p>
              <p>
                <span className="drink-data">Category:</span>
                {drink.strCategory}
              </p>
              <p>
                <span className="drink-data">Info:</span>
                {drink.strAlcoholic}
              </p>
              <p>
                <span className="drink-data">Glass:</span>
                {drink.strGlass}
              </p>
              <p>
                <span className="drink-data">Instructions:</span>
                {drink.strInstructions}
              </p>
              <p>
                <span className="drink-data">Ingredients</span>
                {drink.strIngredient1}
                {drink.strIngredient2}
                {drink.strIngredient3}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCocktail;
