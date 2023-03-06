import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Todo from './components/Todo';

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

describe('Todo application', () => {
  it('add a todo to list', () => {
    render(<Todo />)

    const input = screen.getByTestId('todo-input')
    userEvent.type(input, 'buy some milk')
    userEvent.type(input, '{enter}')

    expect(screen.getByText('buy some milk')).toBeInTheDocument()
  })
})
