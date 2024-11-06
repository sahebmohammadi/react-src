import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { expect } from "vitest";

test("Header Test #1", () => {
  render(<Header title="React App" />);
  const h1Element = screen.getByText(/react/i);
  expect(h1Element).toBeInTheDocument();
});

// test("Header Test #2", () => {
//   render(<Header title="React App" />);
//   const h1Element = screen.getByRole("heading", { name: /react/i });
//   expect(h1Element).toBeInTheDocument();
// });

// test("Header Test #3", () => {
//   render(<Header title="React App" />);
//   const h1Element = screen.getByTitle("header");
//   expect(h1Element).toBeInTheDocument();
// });

// test("Header Test #4", () => {
//   render(<Header title="React App" />);
//   const h1Element = screen.getByTestId("header-2");
//   expect(h1Element).toBeInTheDocument();
// });

// // FINDBY methods:

// test("Header Test #5", async () => {
//   render(<Header title="React App" />);
//   const h1Element = await screen.findByText(/react/i);
//   expect(h1Element).toBeInTheDocument();
// });

// // QUERYBY methos:

// test("Header Test #6", () => {
//   render(<Header title="React App" />);
//   const h1Element = screen.queryByText(/vuejs/i); // NOT EXIST IN DOM
//   expect(h1Element).not.toBeInTheDocument();
// });

// // GETALLBY methods

// test("Header Test #7", () => {
//   render(<Header title="React App" />);
//   const headings = screen.getAllByRole("heading");
//   expect(headings.length).toBe(2);
// });
