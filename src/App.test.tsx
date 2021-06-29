import React from "react";
import { render, screen } from "@testing-library/react";
import InGame from "./InGame";

test("renders learn react link", () => {
  render(<InGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
