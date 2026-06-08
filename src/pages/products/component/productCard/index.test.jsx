import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./index";

describe("ProductCard component", () => {
  const product = {
    id: 123,
    title: "Test Product",
    description: "A quick description of the product.",
    price: 49.99,
    category: "electronics",
    image: "/test-image.png",
  };

  test("renders product details and buy now link", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/electronics/i)).toBeInTheDocument();
    expect(screen.getByText(/\$49.99/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Buy Now/i })).toHaveAttribute("href", "/products/123");
  });
});
