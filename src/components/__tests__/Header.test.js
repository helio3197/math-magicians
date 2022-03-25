import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe('Test for Header component', () => {
  test('The component should render', () => {
    const { asFragment } = render(
      <Router>
        <Header />
      </Router>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
