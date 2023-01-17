import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  return (
    <div className="search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="search">Search Your Favourite Cocktail</label>
          <input type="input" id="search" />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
