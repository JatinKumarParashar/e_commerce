import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "./index";

describe("About component", () => {
    test("renders the about section and navigation links", () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        // Check for the presence of the about section content and navigation links
        expect(screen.getByText(/Modern fashion for every day/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Shop New Arrivals/i })).toHaveAttribute("href", "/products");
        expect(screen.getByRole("link", { name: /Contact Support/i })).toHaveAttribute("href", "/contact");
    });
});
