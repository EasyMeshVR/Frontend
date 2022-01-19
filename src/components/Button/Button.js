import React from 'react';
import buttonStyles from "./Button.module.css";

const Button = ({
    text,
    disabled,
    onClick
}) => {
    const ButtonStyle = `${buttonStyles.Button} ${buttonStyles.ButtonShadow}`;

    return (
        <button 
            className={(disabled) ? `${buttonStyles.DisabledButton} ${ButtonStyle}` : ButtonStyle} 
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
};

export default Button;
