import React from "react";
import { useState } from "react/cjs/react.development";
import "./Calculator.css";
import CalculatorButtons from "./CalculatorButtons";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState("");
  const [prvValue, setPrvValue] = useState(0);
  const [prvButton, setPrvButton] = useState(null);
  const [newValue, setNewValue] = useState(0);
  const [showFinalValue, setShowFinalValue] = useState(false);

  const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const functionButtons = ["(", ")", "%", "AC", "/", "*", "-", ".", "=", "+"];
  const handleButtonClick = (buttonClicked) => {
    if (showFinalValue == true) {
      setScreenValue(newValue);
      setShowFinalValue(false);
      setNewValue(buttonClicked);
    }

    if (numberButtons.includes(buttonClicked)) {
      if (functionButtons.includes(prvButton)) {
        switch (prvButton) {
          case "+":
            setNewValue(prvValue + buttonClicked);
            break;
          case "-":
            setNewValue(prvValue - buttonClicked);
            break;
          case "*":
            setNewValue(prvValue * buttonClicked);
            break;
          case "/":
            setNewValue(prvValue / buttonClicked);
            break;
        }

        setPrvValue(newValue);
      } else {
        setPrvValue(prvValue + buttonClicked);
        setNewValue(prvValue + buttonClicked);
      }

      setScreenValue(`${screenValue} ${buttonClicked}`);
    } else {
      if (buttonClicked == "=") {
        setPrvButton("");
        setPrvValue(0);
        setShowFinalValue(true);
      } else {
      }

      setScreenValue(`${screenValue}  ${buttonClicked}`);
      setPrvButton(buttonClicked);
      setPrvValue(newValue);
    }
  };

  const calcButtons = [
    "(",
    ")",
    "%",
    "AC",
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "-",
    0,
    ".",
    "=",
    "+",
  ];
  return (
    <>
      <div className="wrapper">
        {showFinalValue ? (
          <div className="calcScreen">
            <div>{screenValue}</div>
            <div>{newValue}</div>
          </div>
        ) : (
          <div className="calcScreen">{screenValue}</div>
        )}
        <div className="calcButtonWrapper">
          <CalculatorButtons
            calcButtons={calcButtons}
            onClick={handleButtonClick}
          />
        </div>
      </div>
      <h1>Calculator</h1>
    </>
  );
};

export default Calculator;
