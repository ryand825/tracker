import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4 ">
      <div className="container">
        <span className="navbar-brand">Time App</span>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-text">item left</li>
          </ul>
          <Link to="/clock-in" className="nav-link">
            Clock-in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
