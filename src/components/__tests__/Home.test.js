import { render } from '@testing-library/react';
import Home from '../Home';

describe('Test for Home component', () => {
  test('The component should render', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
