import { render, fireEvent, screen } from "@testing-library/react";
import ThemeChanger from "../src/components/theme-changer/ThemeChanger";

describe("ThemeChanger", () => {
  it("Renderiza el nombre correcto de botón", () => {
    render(<ThemeChanger />);
    expect(screen.getByText("Dark theme")).toBeInTheDocument();
  });
});
