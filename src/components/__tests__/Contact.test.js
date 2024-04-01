import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("this is about contact us page", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("should load contact us component", () => {
    render(<Contact />);
    const text = screen.getByText("Salaman Khan");
    expect(text).toBeInTheDocument();
  });
});
