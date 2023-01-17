import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-center">
        <img src={logo} alt="logo" className="logo" />
        <div className="nav-links">
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/about">About</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
