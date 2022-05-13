import { v4 as uuid } from "uuid";

export const todos = [
  {
    id: uuid(),
    event: "Some Event 1",

    status: "Incomplete",
  },
  {
    id: uuid(),
    event: "Some Event 2",

    status: "Completed",
  },
  {
    id: uuid(),
    event: "Some Event 3",

    status: "Incomplete",
  },
];
