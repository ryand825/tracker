import React from "react";
// import "./Titlebar.css";
import Clock from "../Clock/Clock";

const titlebar = () => {
  return (
    <ul className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <li className="navbar-brand"> HEader </li>
      <Clock />
    </ul>
  );
};

export default titlebar;
