import React, { useState } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (showAlert) {
      setShowAlert(false);
    }
  };

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="app">
      <h1>Front React</h1>
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleButtonClick} disabled={!inputValue} />
      {showAlert && (
        <Alert message="Alert!!!!" onClose={handleCloseAlert} />
      )}
    </div>
  );
};

export default App;
