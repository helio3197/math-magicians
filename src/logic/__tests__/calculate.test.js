import calculate from '../calculate';

describe('Tests for calculate function', () => {
  test('Calling the function with (obj, \'=\') should return \'36\'', () => {
    const calcObj = {
      total: '12',
      next: '24',
      operation: '+',
      totalCalc: '12',
    };
    expect(calculate(calcObj, '=').total).toBe('36');
  });
  test('Calling the function with (obj, \'=\') should return \'12\'', () => {
    const calcObj = {
      total: '24',
      next: '2',
      operation: '÷',
      totalCalc: '24',
    };
    expect(calculate(calcObj, '=').total).toBe('12');
  });
  test('Calling the function with (obj, \'AC\') should return \'0\'', () => {
    const calcObj = {
      total: '125',
      next: '58',
      operation: '*',
      totalCalc: '125',
    };
    expect(calculate(calcObj, 'AC').total).toBe('0');
  });
  test('Calling the function with (obj, \'=\') should return \'25\'', () => {
    const calcObj = {
      total: '125',
      next: '100',
      operation: '-',
      totalCalc: '125',
    };
    expect(calculate(calcObj, '=').total).toBe('25');
  });
});
