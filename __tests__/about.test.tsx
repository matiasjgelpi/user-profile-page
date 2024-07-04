import { render, screen } from "@testing-library/react";
import About from "../src/components/about/About";

describe("About ", () => {
  test("Renderiza el texto provisto", () => {
    const aboutText = "Este es un texto sobre mi";
    render(<About aboutText={aboutText} />);
    const aboutTextElement = screen.getByText(aboutText);
    expect(aboutTextElement).toBeInTheDocument();
  });
});
