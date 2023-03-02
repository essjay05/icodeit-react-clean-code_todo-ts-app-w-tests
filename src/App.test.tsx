import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test(`renders 'my todo application' text`, () => {
  render(<App />);
  const linkElement = screen.getByText('My Todo Application');
  expect(linkElement).toBeInTheDocument();
});

test('renders submit button', () => {
  render(<App />);
  const submitBtnElement = screen.getByText('Submit');
  expect(submitBtnElement).toBeInTheDocument();
});
