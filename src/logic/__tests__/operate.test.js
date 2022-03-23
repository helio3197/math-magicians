import operate from '../operate';

describe('Tests for Operate Function', () => {
  test('Test adding 1 + 2 equal to 3', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });
});
