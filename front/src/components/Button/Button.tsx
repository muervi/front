import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  disabled: boolean; 
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="button">
      Show Alert
    </button>
  );
};

export default Button;
