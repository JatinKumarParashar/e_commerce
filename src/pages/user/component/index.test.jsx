import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

import Register from "./index";

describe("Register component", () => {
  beforeEach(() => {
    localStorage.clear();
    navigateMock.mockClear();
  });

  afterEach(() => {
    // keep default real timers
  });

  test("shows validation errors when form fields are invalid", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /Create Account/i }));

    expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  test("registers a user and navigates after successful submission", async () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/^Password$/i), { target: { value: "password123" } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: /Create Account/i }));

    await waitFor(
      () => expect(navigateMock).toHaveBeenCalledWith("/"),
      { timeout: 3000 }
    );

    const users = JSON.parse(localStorage.getItem("users"));
    expect(users).toHaveLength(1);
    expect(users[0].email).toBe("john@example.com");
  });
});
