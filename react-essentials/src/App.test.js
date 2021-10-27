import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a 'Loading' message", () => {
  render(<App login="Emmanuel289" />);
  const divElement = screen.getByText(/Loading /i);
  expect(divElement).toBeInTheDocument();
});
