import React from 'react';
import buttonStyles from "./Button.module.css";

const Button = ({
    text,
    disabled,
    onClick
}) => {
    return (
        <button
            className={(disabled) ? buttonStyles.DisabledButton : buttonStyles.Button}
            disabled={disabled}
            onClick={onClick}
        >
           {text} 
        </button>
    )
};

export default Button;
