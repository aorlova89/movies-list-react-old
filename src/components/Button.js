import React from "react";

export const Button = (props) => {
    const {name, onClick, className, isActive} = props;

    return <button
        style={{backgroundColor: isActive && "#8b0000"}}
        className={`btn ${className}`}
        id={name}
        onClick={onClick}>
        {name}
    </button>
}
