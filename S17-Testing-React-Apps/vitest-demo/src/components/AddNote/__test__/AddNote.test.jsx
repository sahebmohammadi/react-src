import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import AddTodo from "../AddNote";

const mockedSetTodos = vi.fn();

test("should render input element", () => {
  render(<AddTodo setTodos={mockedSetTodos} todos={[]} />);
  const inputEl = screen.getByLabelText("todo");
  expect(inputEl).toBeInTheDocument();
});

test("should be abele to type inno input", () => {
  render(<AddTodo setTodos={mockedSetTodos} todos={[]} />);
  const inputEl = screen.getByLabelText("todo");
  fireEvent.click(inputEl);
  fireEvent.change(inputEl, { target: { value: "Coding" } });
  expect(inputEl.value).toBe("Coding");
});

test("should have empty input when add button is clicked", () => {
  render(<AddTodo setTodos={mockedSetTodos} todos={[]} />);
  const inputEl = screen.getByLabelText("todo");
  fireEvent.click(inputEl);
  fireEvent.change(inputEl, { target: { value: "Coding" } });
  const button = screen.getByRole("button", { name: /Add/i });
  fireEvent.click(button);
  expect(inputEl.value).toBe("");
});

test("should setTodos is able to be clicked", () => {
  render(<AddTodo setTodos={mockedSetTodos} todos={[]} />);
  const inputEl = screen.getByLabelText("todo");
  fireEvent.click(inputEl);
  fireEvent.change(inputEl, { target: { value: "Coding" } });
  const button = screen.getByRole("button", { name: /Add/i });
  fireEvent.click(button);
  expect(mockedSetTodos).toBeCalled();
});
