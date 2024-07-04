import { render, screen } from "@testing-library/react";
import Header from "../src/components/header/Header";
// import Header from "./Header";

describe("Header", () => {
  test("Renderiza un nombre de usuario", () => {
    render(<Header userName="Matías Gelpi" imgUrl="" />);
    const userNameElement = screen.getByText(/Matías Gelpi/i);
    expect(userNameElement).toBeInTheDocument();
  });

  test("Renderiza una foto con los atributos title y alt", () => {
    render(<Header userName="Matias Gelpi" imgUrl="/public/profilePhoto.jpg" />);
    const profilePhoto = screen.getByAltText(/Matias Gelpi profile photo/i);
    expect(profilePhoto).toBeInTheDocument();
    expect(profilePhoto).toHaveAttribute("title", "Matias Gelpi profile photo");
  });

  test("Renderiza redes sociales cuando son provistas", () => {
    const socialLinks = [
      { name: "GitHub", url: "https://github.com/matiasjgelpi" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/matiasjgelpi" },
    ];
    render(<Header userName="John Doe" imgUrl="" social={socialLinks} />);
    socialLinks.forEach((link) => {
      const socialLink = screen.getByText(new RegExp(link.name, "i"));
      expect(socialLink).toBeInTheDocument();
      expect(socialLink).toHaveAttribute("href", link.url);
    });
  });
});