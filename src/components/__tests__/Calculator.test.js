import { render } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Test for Quote component', () => {
  test('The component should render', () => {
    const { asFragment } = render(<Calculator />);

    expect(asFragment()).toMatchSnapshot();
  });
});
