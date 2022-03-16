import './Calculator.css';

const Calculator = () => (
  <div className="calc-wrapper">
    <div className="calc-result">
      <output>0</output>
    </div>
    <div className="calc-buttons">
      {['AC', '+/-', '%', '÷', '7', '8', '9', '⨉', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((el) => (<button type="button" key={el}>{el}</button>))}
    </div>
  </div>
);

export default Calculator;