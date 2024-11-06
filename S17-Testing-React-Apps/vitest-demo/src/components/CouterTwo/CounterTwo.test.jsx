import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import CounterTwo from "./CounterTwo";
import userEvent from "@testing-library/user-event";

describe("ConterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    const user = userEvent.setup();
    const incrementHandler = vi.fn();
    const decrementHandler = vi.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incBtn = screen.getByRole("button", { name: "Increment" });
    const decBtn = screen.getByRole("button", { name: "Decrement" });
    await user.click(incBtn);
    await user.click(decBtn);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
