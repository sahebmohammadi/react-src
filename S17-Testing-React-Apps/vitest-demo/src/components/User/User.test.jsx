import { render, screen } from "@testing-library/react";
import Users from "./User";
import { expect } from "vitest";
import { server } from "../../mocks/server";
import { HttpResponse, http } from "msw";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const heading = screen.getByText("Users");
    expect(heading).toBeInTheDocument();
  });

  test("should have 3 user item", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("renders error message", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json(null, { status: 404 });
      })
    );
    render(<Users />);

    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});

