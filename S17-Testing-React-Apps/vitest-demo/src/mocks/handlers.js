import { HttpResponse, http } from "msw";

const users = [
  {
    id: 1,
    name: "Saheb M",
  },
  {
    id: 2,
    name: "Ali M",
  },
  {
    id: 3,
    name: "Mike Tyson",
  },
];

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", ({ params }) => {
    return HttpResponse.json(users, { status: 200 });
  }),
];
