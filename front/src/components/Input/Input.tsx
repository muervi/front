import React from "react";
import "./Input.css";

interface InputProps {
  value: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Here..."
      className="input"
    />
  );
};

export default Input;
