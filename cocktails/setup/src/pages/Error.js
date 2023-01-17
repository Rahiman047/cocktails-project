import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h2 className="error-page">Oops something went wrong...!</h2>
      <button type="button" className="btn">
        <Link to="/">Take me Back</Link>
      </button>
    </div>
  );
};

export default Error;
