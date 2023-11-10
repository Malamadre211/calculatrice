import React, { useState } from 'react';
import Calculator from './calculatrice';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleOperatorClick = (operator: string) => {
    setInput((prevInput) => prevInput + operator);
  };

  const handleNumberClick = (number: number) => {
    setInput((prevInput) => prevInput + number.toString());
  };

  const handleEqualClick = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClearClick = () => {
    setInput('');
  };

  return (
    <div className="app-container">
      <Calculator
        input={input}
        onOperatorClick={handleOperatorClick}
        onNumberClick={handleNumberClick}
        onEqualClick={handleEqualClick}
        onClearClick={handleClearClick}
      />
    </div>
  );
};

export default App;
