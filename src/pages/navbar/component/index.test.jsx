import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

import { useSelector, useDispatch } from "react-redux";
import Navbar from "./index";

describe("Navbar component", () => {
  const dispatchMock = vi.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockImplementation((selector) =>
      selector({ handleCart: [{ id: 1 }], handleWishList: [{ id: 1 }, { id: 2 }] })
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("renders navigation links and cart/wishlist counts", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("toggles the search input when the search icon button is clicked", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggleSearch = screen.getByRole("button", { name: /toggle search/i });
    fireEvent.click(toggleSearch);

    expect(screen.getByPlaceholderText(/Search our collection/i)).toBeVisible();
  });
});
