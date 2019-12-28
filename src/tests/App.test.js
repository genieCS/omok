import React from 'react';
import { render } from '@testing-library/react';
import App from '../views/App';

test('renders hello word link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
