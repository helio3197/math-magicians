import { render } from '@testing-library/react';
import Quote from '../Quote';

describe('Test for Quote component', () => {
  test('The component should render', () => {
    const { asFragment } = render(<Quote />);

    expect(asFragment()).toMatchSnapshot();
  });
});
