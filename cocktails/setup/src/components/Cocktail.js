import React from "react";
import { Link } from "react-router-dom";

const Cocktail = (props) => {
  const { eachDrink } = props;
  const { strDrink, strGlass, strAlcoholic, strDrinkThumb, idDrink } =
    eachDrink;

  return (
    <div className="cocktail">
      <img src={strDrinkThumb} alt={strGlass} />
      <footer className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <button type="button" className="btn btn-primary">
          <Link to={`products/${idDrink}`}>DETAILS</Link>
        </button>
      </footer>
    </div>
  );
};

export default Cocktail;
