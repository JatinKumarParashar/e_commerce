import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

import { useSelector, useDispatch } from "react-redux";
import Cart from "./index";

describe("Cart component", () => {
  const dispatchMock = vi.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("renders empty cart state when there are no items", () => {
    useSelector.mockImplementation((selector) => selector({ handleCart: [] }));

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Continue Shopping/i })).toHaveAttribute("href", "/products");
  });

  test("renders cart items and dispatches actions when buttons are clicked", () => {
    const sampleProduct = {
      id: 99,
      title: "Test Product",
      price: 10,
      quantity: 2,
      image: "/item.png",
      category: "accessories",
      description: "Test description.",
    };

    useSelector.mockImplementation((selector) => selector({ handleCart: [sampleProduct] }));

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText(/Shopping cart/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /\+/i }));
    fireEvent.click(screen.getByRole("button", { name: /-/i }));
    fireEvent.click(screen.getByRole("button", { name: /Remove/i }));

    expect(dispatchMock).toHaveBeenCalledTimes(3);
  });
});
