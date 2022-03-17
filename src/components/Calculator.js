import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: { total: '0' },
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(e) {
    const btnValue = e.target.innerHTML;
    const { calcObj: currentObj } = this.state;
    this.setState({
      calcObj: calculate(currentObj, btnValue),
    });
  }

  render() {
    const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    const { calcObj: { total } } = this.state;

    return (
      <div className="calc-wrapper">
        <div className="calc-result">
          <output>{total}</output>
        </div>
        <div className="calc-buttons">
          {buttons.map((el) => (<button type="button" onClick={this.buttonHandler} key={el}>{el}</button>))}
        </div>
      </div>
    );
  }
}

export default Calculator;
