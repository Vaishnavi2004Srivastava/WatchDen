import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders navigation links", () => {
  render(<Header />);

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Shop")).toBeInTheDocument();
  expect(screen.getByText("About")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
});
