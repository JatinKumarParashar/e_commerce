import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./index";

describe("Footer component", () => {
  test("renders brand links and current year", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /LA COLLECTION/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Products/i })).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes(new Date().getFullYear().toString()))
    ).toBeInTheDocument();
  });
});
