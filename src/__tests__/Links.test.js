
// Links.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Links from '..components/Links';

test("displays the URL of a Github link passed down as a prop", () => {
  render(<Links github={"https://github.com/liza"} />);
  expect(screen.getByText("https://github.com/liza")).toBeInTheDocument();
});

test("displays the URL of a Linkedin link passed down as a prop", () => {
  render(<Links linkedin={"https://www.linkedin.com/in/liza/"} />);
  expect(screen.getByText("https://www.linkedin.com/in/liza/")).toBeInTheDocument();
});

