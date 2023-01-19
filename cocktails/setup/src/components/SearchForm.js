import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { getSearchInput } = useGlobalContext();
  return (
    <div className="search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="search">Search Your Favorite Cocktail</label>
          <input
            type="input"
            id="search"
            onChange={(e) => getSearchInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
