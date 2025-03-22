import { render, screen, prettyDOM } from "@testing-library/react";
import Footer from "../Footer"; // ✅ Correct relative path

test("renders footer with correct text", () => {
  const { container } = render(<Footer />);
  console.log(prettyDOM(container)); // Logs the rendered HTML

  expect(screen.getByText(/© 2025 WatchDen/i)).toBeInTheDocument();
});
