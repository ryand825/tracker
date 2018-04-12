import React from 'react';
import './ClockCounter.css';

const clockCounter = (props) => {
    const activeClass = props.running ? 'active' : '';

    return (
        <div className="counter">
            {props.duration.substr(11, 2)}
            <span className={activeClass}>:</span>
            {props.duration.substr(14, 2)}
            <span className={activeClass}>:</span>
            {props.duration.substr(17, 2)}
        </div>
    )
}

export default clockCounter
