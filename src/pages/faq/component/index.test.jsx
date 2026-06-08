import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FAQ from "./index";

describe("FAQ component", () => {
  test("toggles FAQ answers when question buttons are clicked", () => {
    render(<FAQ />);

    const firstAnswer = screen.getByText(/We offer a 30-day return policy/i);
    expect(firstAnswer).toHaveClass("hidden");

    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);

    expect(firstAnswer).not.toHaveClass("hidden");
    fireEvent.click(buttons[0]);
    expect(firstAnswer).toHaveClass("hidden");
  });
});
