import operate from '../operate';

describe('Tests for Operate Function', () => {
  test('Test adding 1 + 2 equal to 3', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });
  test('Test dividing 4 by 2 to be 2 ', () => {
    expect(operate('4', '2', '÷')).toBe('2');
  });
  test('Test Substract 6 by 2 to be 4 ', () => {
    expect(operate('6', '2', '-')).toBe('4');
  });
});
