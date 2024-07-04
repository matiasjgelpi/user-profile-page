import { render, screen } from "@testing-library/react";
import Interests from "../src/components/interests/Interests";

describe("Interests", () => {
  test("Renderiza una lista de intereses", () => {
    const interests = ["Leer", "Cocinar", "Fotografía"];
    render(<Interests interests={interests} />);
    interests.forEach((interest) => {
      const interestElement = screen.getByText(new RegExp(interest, "i"));
      expect(interestElement).toBeInTheDocument();
    });
  });
});
