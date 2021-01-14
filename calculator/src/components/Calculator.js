import React, { useState } from 'react';
import classes from './Calculator.module.css'

const calculate = (a, b, operation) => {
  if (operation === 1) {
    return a + b;
  }

  if (operation === 2) {
    return a - b;
  }

  if (operation === 3) {
    return a * b;
  }

  if (operation === 4) {
    return a / b;
  }

  if (operation === 5) {
    return a ** b;
  }

  return 'error'
}

const Calculator = () => {

  const [number, setNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState(1);

  return (
    <div className={classes.Calculator}>
      <form className={classes.Form}>
        <input type="number" name="firstNumber" onChange = {(event) => setNumber(+event.target.value)} />
        <select name="operation" onChange = {(event) => setOperation(+event.target.value)}>
          <option value="1">+</option>
          <option value="2">-</option>
          <option value="3">*</option>
          <option value="4">/</option>
          <option value="5">^</option>
        </select>
        <input type="number" name="secondNumber" onChange = {(event) => setSecondNumber(+event.target.value)} />
      </form>
      <div className={classes.Result}>
        <p> = { calculate(number, secondNumber, operation) }</p>
      </div>
    </div>
  )
}

export default Calculator
