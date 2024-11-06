import { render, screen } from "@testing-library/react";
import ErrorMesasge from "../ErrorMesasge";
import { expect } from "vitest";

test("ErrorMessage #1", () => {
  render(<ErrorMesasge count={1} />);
  const pEelement = screen.getByText(/1 error occured./i);
  expect(pEelement).toBeInTheDocument();
});

test("ErrorMessage #2", () => {
  render(<ErrorMesasge count={2} />);
  const pEelement = screen.getByText(/2 errors occured./i);
  expect(pEelement).toBeTruthy();
});

test("ErrorMessage #3", () => {
  render(<ErrorMesasge count={2} />);
  const pEelement = screen.getByText(/2 errors occured./i);
  expect(pEelement).toBeVisible();
});

test("ErrorMessage #4", () => {
  render(<ErrorMesasge count={3} />);
  const pEelement = screen.getByText(/3 errors occured./i);
  expect(pEelement).toHaveTextContent("3 errors occured.");
});

test("ErrorMessage #5", () => {
  render(<ErrorMesasge count={3} />);
  const pEelement = screen.getByText(/3 errors occured./i);
  expect(pEelement).not.toBeFalsy();
});

test("ErrorMessage #6", () => {
  render(<ErrorMesasge count={3} />);
  const pEelement = screen.getByText(/3 errors occured./i);
  expect(pEelement.textContent).toBe("3 errors occured.");
});

// test("ErrorMessage #7", () => {
//   render(<ErrorMesasge count={3} />);
//   const pEelement = screen.getByText(/3 errors occured./i);
//   expect(pEelement).toContainHTML("<span>hi</span>");
// });

// test("ErrorMessage #8", () => {
//   render(<ErrorMesasge count={3} />);
//   const pEelement = screen.getByText(/3 errors occured./i);
//   const span = screen.getByText("hi");
//   expect(pEelement).toContainElement(span);
// });
