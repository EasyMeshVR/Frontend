import React from 'react';
import "./Button.css";

const Button = ({
    text,
    disabled,
    onClick
}) => {
    return (
        <button
            className={(disabled) ? "DisabledButton" : "Button"}
            disabled={disabled}
            onClick={onClick}
        >
           {text} 
        </button>
    )
};

export default Button;
