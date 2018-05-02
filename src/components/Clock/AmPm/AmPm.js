import React from "react";
import "./AmPm.css";

const ampm = props => {
  return (
    <span className="ampm">
      <div className={props.am ? "selected-ampm" : ""}>AM</div>
      <div className={props.am ? "" : "selected-ampm"}> PM</div>
    </span>
  );
};

export default ampm;
