import React from "react";
import "./Calculator.css";

const CalculatorButtons = ({ calcButtons, onClick }) => {
  return (
    <>
      {calcButtons.map((button) => (
        <div className="buttonStyle" onClick={() => onClick(button)}>
          {button}
        </div>
      ))}
    </>
  );
};

export default CalculatorButtons;
