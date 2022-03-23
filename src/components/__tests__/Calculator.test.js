import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Test for Calculator component', () => {
  test('The component should render', () => {
    const { asFragment } = render(<Calculator />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('Clicking the numbers 5, 4 and 2 the output should display 542', () => {
    const { getByTestId } = render(<Calculator />);
    fireEvent.click(getByTestId('5'));
    fireEvent.click(getByTestId('4'));
    fireEvent.click(getByTestId('2'));

    expect(getByTestId('result')).toHaveTextContent('542');
  });
});
