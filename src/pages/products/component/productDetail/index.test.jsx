import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: "1" }),
  };
});

import { useDispatch } from "react-redux";
import Product from "./index";

describe("ProductDetail component", () => {
  const dispatchMock = vi.fn();
  const product = {
    id: 1,
    title: "Mock Product",
    description: "Detailed description of the mock product.",
    price: 99.99,
    category: "electronics",
    image: "/mock.png",
    rating: { rate: 4.5, count: 120 },
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(product),
      })
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
    delete global.fetch;
  });

  test("renders loading state and then product details", async () => {
    render(
      <MemoryRouter>
        <Product />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading product/i)).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: /Mock Product/i })).toBeInTheDocument();
    expect(screen.getByText(/\$99.99/i)).toBeInTheDocument();
  });

  test("dispatches add to cart and wishlist actions", async () => {
    render(
      <MemoryRouter>
        <Product />
      </MemoryRouter>
    );

    expect(await screen.findByRole("heading", { name: /Mock Product/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));
    fireEvent.click(screen.getByRole("button", { name: /Add to Wishlist/i }));

    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });
});
