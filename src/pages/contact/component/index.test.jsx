import React from "react";
import { act, render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "./index";

describe("Contact component", () => {
  let alertSpy;

  beforeEach(() => {
    alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
    vi.useRealTimers();
  });

  test("shows validation alert when required fields are missing", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

    expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining("Please fill in"));
  });

  test("submits the contact form and resets fields", async () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Full name/i), { target: { value: "Jane Doe" } });
    fireEvent.change(screen.getByPlaceholderText(/Email address/i), { target: { value: "jane@example.com" } });
    fireEvent.change(screen.getByPlaceholderText(/Write your message here/i), {
      target: { value: "Hello, I have a quick question." },
    });

    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

    await waitFor(
      () => {
        expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining("Thanks for contacting LA COLLECTION"));
        expect(screen.getByPlaceholderText(/Full name/i)).toHaveValue("");
        expect(screen.getByPlaceholderText(/Email address/i)).toHaveValue("");
        expect(screen.getByPlaceholderText(/Write your message here/i)).toHaveValue("");
      },
      { timeout: 2000 }
    );
  });
});
