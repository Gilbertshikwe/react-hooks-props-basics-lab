// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test("renders the correct child components", () => {
  render(<App />);
  expect(screen.getByTestId("home")).toBeInTheDocument();
  expect(screen.getByTestId("about")).toBeInTheDocument();
});

test("passes 'name', 'username', and 'bio' to <Home> as props", () => {
  render(<App />);
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("johndoe")).toBeInTheDocument();
  expect(screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toBeInTheDocument();
});

test("passes 'github' and 'linkedin' to <About> as props", () => {
  render(<App />);
  expect(screen.getByText("https://github.com/liza")).toBeInTheDocument();
  expect(screen.getByText("https://www.linkedin.com/in/liza/")).toBeInTheDocument();
});
