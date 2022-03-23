import { useState } from 'react';
import calculate from '../logic/calculate';
import dragElement from './drag-calc';
import './Calculator.css';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({ total: '0' });

  const buttonHandler = (e) => {
    const btnValue = e.target.innerHTML;
    setCalcObj(calculate(calcObj, btnValue));
  };

  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const { total } = calcObj;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '24px 0',
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '960px',
      }}
    >
      <div
        style={{
          width: '50%',
        }}
      >
        <h2>Let&apos;s do some math!</h2>
        <h3>The calculator is draggable!</h3>
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div onMouseDown={dragElement} role="button" tabIndex="0" className="calc-wrapper">
          <div className="calc-result">
            <output>{total}</output>
          </div>
          <div className="calc-buttons">
            {buttons.map((el) => (<button type="button" onClick={buttonHandler} key={el}>{el}</button>))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
