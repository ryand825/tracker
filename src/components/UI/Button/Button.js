import React from "react";
// import './Button.css';

const button = props => {
  let classes = ["btn", "btn-success"];
  if (props.warning) {
    classes.push("btn-danger");
  }

  return (
    <button
      className={classes.join(" ")}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default button;
