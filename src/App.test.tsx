import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders the home section", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: "Shaik Mahammad Rafi" });
  expect(heading).toBeInTheDocument();
});
