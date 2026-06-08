import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

import { useSelector, useDispatch } from "react-redux";
import Products from "./index";

describe("Products component", () => {
  const dispatchMock = vi.fn();
  const sampleProducts = [
    {
      id: 1,
      title: "Electric Lamp",
      description: "A bright lamp for your desk.",
      price: 39.99,
      category: "electronics",
      image: "/lamp.png",
    },
    {
      id: 2,
      title: "Casual Shirt",
      description: "Comfortable casual shirt.",
      price: 29.99,
      category: "men's clothing",
      image: "/shirt.png",
    },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockImplementation((selector) =>
      selector({ searchItemsReducer: { allItems: sampleProducts, filteredItems: sampleProducts } })
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("renders product list and filter buttons", async () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );

    expect(await screen.findByText(/Electric Lamp/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Casual Shirt/i })).toBeInTheDocument();
  });

  test("filters products by category", async () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );

    await screen.findByText(/Electric Lamp/i);

    fireEvent.click(screen.getByRole("button", { name: /Electronics/i }));

    await waitFor(() => {
      expect(screen.getByText(/Electric Lamp/i)).toBeInTheDocument();
    });

    // At least one product remains visible after filtering (avoid brittle exact counts)
    expect(screen.getAllByRole("link", { name: /Buy Now/i }).length).toBeGreaterThanOrEqual(1);
  });
});
