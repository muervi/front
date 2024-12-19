import React from "react";
import "./Alert.css";

interface AlertProps {
  message: string; 
  onClose: () => void; 
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="alert">
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Alert;
