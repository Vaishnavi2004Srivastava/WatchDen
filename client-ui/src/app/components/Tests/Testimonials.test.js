import { render, screen } from "@testing-library/react";
import Testimonials from "../Testimonials";

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test("renders testimonials with client names and feedback", () => {
  render(<Testimonials />);

  expect(screen.getByText("James Carter")).toBeInTheDocument();
  expect(screen.getByText("Luxury Watch Collector")).toBeInTheDocument();
  expect(
    screen.getByText(/Absolutely stunning craftsmanship/i)
  ).toBeInTheDocument();
});
