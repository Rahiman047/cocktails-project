import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [drink, setDrink] = useState([]);

  const { id } = useParams();

  const fetchSingleDrinkData = async () => {
    try {
      const newUrl = `${url + id}`;
      const response = await axios.get(newUrl);
      const data = await response.data;
      setDrink(data.drinks);
      console.log(drink);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleDrinkData();
  }, []);

  return (
    <div>
      <h2>single cocktail page </h2>
    </div>
  );
};

export default SingleCocktail;
