import React from 'react';
import './Button.css';

const button = (props) => {
    let classes = ["my-button"]
    if (props.warning){
        classes.push("warning");
    }

    return (
        <button
            className={classes.join(" ")}
            onClick={props.clicked}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default button
