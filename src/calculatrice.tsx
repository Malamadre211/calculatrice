import React from 'react';
import './calculatrice.css';

interface CalculatorProps {
  input: string;
  onOperatorClick: (operator: string) => void;
  onNumberClick: (number: number) => void;
  onEqualClick: () => void;
  onClearClick: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({ input, onOperatorClick, onNumberClick, onEqualClick, onClearClick }) => {
  return (
      <div className="box">
          <h1>Calculatrice</h1>
    <div className="calculator-container">

      <div className="calculator-screen">
        <div className="screen-input">{input}</div>
      </div>

      <div className="calculator-buttons">

      <div className="calculator-operators">
          {['+', '-', '*', '/'].map((operator) => (
            <button key={operator} onClick={() => onOperatorClick(operator)}>
              {operator}
            </button>
          ))}
        </div>

        <div className="calculator-numbers">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
            <button key={number} onClick={() => onNumberClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={() => onEqualClick()} className="equal-button">=</button>
          <button onClick={() => onClearClick()} className="delete" >C</button>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Calculator;