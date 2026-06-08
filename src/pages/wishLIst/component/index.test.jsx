import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

import { useSelector, useDispatch } from "react-redux";
import Wish from "./index";

describe("Wish component", () => {
  const dispatchMock = vi.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("renders empty wishlist state when there are no items", () => {
    useSelector.mockImplementation((selector) => selector({ handleWishList: [] }));

    render(
      <MemoryRouter>
        <Wish />
      </MemoryRouter>
    );

    expect(screen.getByText(/Your wishlist is empty/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Browse Products/i })).toHaveAttribute("href", "/products");
  });

  test("renders wishlist items and dispatches add/remove actions", () => {
    const sampleProduct = {
      id: 101,
      title: "Wishlist Item",
      price: 19.99,
      image: "/wish.png",
      category: "jewelery",
      description: "Favorite item description.",
    };

    useSelector.mockImplementation((selector) => selector({ handleWishList: [sampleProduct] }));

    render(
      <MemoryRouter>
        <Wish />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /Wishlist Item/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("link", { name: /Add to Cart/i }));
    fireEvent.click(screen.getByRole("button", { name: /Remove/i }));

    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });
});
