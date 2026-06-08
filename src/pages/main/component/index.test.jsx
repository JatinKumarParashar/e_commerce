import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "./index";

vi.mock("../../products/component/products", () => ({
  default: () => <div data-testid="products-component">Products Stub</div>,
}));

describe("Main page hero slider", () => {
  beforeAll(() => {
    if (!global.requestAnimationFrame) {
      global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
    }
    if (!global.cancelAnimationFrame) {
      global.cancelAnimationFrame = clearTimeout;
    }
  });

  test("renders initial slide and featured products section", () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    expect(screen.getByText(/LA COLLECTION/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Next slide/i })).toBeInTheDocument();
    expect(screen.getByTestId("products-component")).toBeInTheDocument();
  });

  test("navigates slides when next and previous buttons are clicked", async () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    const nextButton = screen.getByRole("button", { name: /Next slide/i });
    fireEvent.click(nextButton);
    expect(screen.getByText(/NEW SEASON/i)).toBeInTheDocument();

    const prevButton = screen.getByRole("button", { name: /Previous slide/i });
    fireEvent.click(prevButton);
    expect(screen.getByText(/LA COLLECTION/i)).toBeInTheDocument();
  });
});
