import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: '0',
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return { total: '0' };
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { ...obj, next: obj.next + buttonName, total: `${(obj.next[0] === '-') ? `${obj.totalCalc} ${obj.operation} (${obj.next + buttonName})` : obj.total + buttonName}` };
      }
      return { ...obj, next: buttonName, total: obj.total + buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: obj.total + buttonName,
      };
    }
    return {
      next: buttonName,
      total: `${buttonName}`,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.`, total: `${obj.total}.` };
    }
    if (obj.operation) {
      return { ...obj, next: '0.', total: `${obj.total}0.` };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.total}.`, total: `${obj.total}.` };
    }
    // return { next: '0.', total: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        ...obj,
        total: operate(((obj.totalCalc) ? obj.totalCalc : '0'), obj.next, obj.operation),
        totalCalc: operate(((obj.totalCalc) ? obj.totalCalc : '0'), obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return { total: '0' };
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      const updateValue = (-1 * parseFloat(obj.next)).toString();
      return { ...obj, next: updateValue, total: (obj.totalCalc) ? `${obj.totalCalc} ${obj.operation} ${(updateValue[0] === '-') ? `(${updateValue})` : updateValue}` : updateValue };
    }
    if (obj.total) {
      if (obj.total === '0') {
        return obj;
      }
      if (obj.operation) {
        return { ...obj, total: `${(-1 * parseFloat(obj.totalCalc)).toString()} ${obj.operation} `, totalCalc: (-1 * parseFloat(obj.totalCalc)).toString() };
      }
      return { ...obj, total: `${(-1 * parseFloat(obj.totalCalc)).toString()}`, totalCalc: (-1 * parseFloat(obj.totalCalc)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation after pressing '='
  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName, total: `${obj.total} ${buttonName} ` };
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName, total: `${(obj.totalCalc) ? obj.totalCalc : '0'} ${buttonName} ` };
    }

    return {
      total: `${operate(((obj.totalCalc) ? obj.totalCalc : '0'), obj.next, obj.operation)} ${buttonName} `,
      next: null,
      operation: buttonName,
      totalCalc: operate(((obj.totalCalc) ? obj.totalCalc : '0'), obj.next, obj.operation),
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    totalCalc: obj.next,
    total: `${obj.next} ${buttonName} `,
    next: null,
    operation: buttonName,
  };
}
