import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
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
            <NavLink
              activeClassName="text-info"
              to="/clock-in"
              className="nav-link"
            >
              Clock In
            </NavLink>
            <NavLink
              activeClassName="text-info"
              to="/time-sheet"
              className="nav-link"
            >
              Time Sheet
            </NavLink>
            <NavLink
              activeClassName="text-info"
              to="/settings"
              className="nav-link"
            >
              Settings
            </NavLink>
          </ul>
          <span className="navbar-nav">
            <NavLink
              activeClassName="text-info"
              to="/register"
              className="nav-link"
            >
              Register
            </NavLink>
            <NavLink
              activeClassName="text-info"
              to="/login"
              className="nav-link"
            >
              Login
            </NavLink>
            <button onClick={props.logout} className="nav-link btn btn-link">
              Logout
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
