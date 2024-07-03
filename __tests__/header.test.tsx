import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import  Header  from "../src/components/header/Header";

it('Render Header component', () => {
    render(<Header imgUrl="/prueba" userName="prueba" />);
    const header = screen.getByText('prueba');
    expect(header).toBeInTheDocument();
    
});

