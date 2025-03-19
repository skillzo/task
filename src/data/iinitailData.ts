import { Task } from "../types/globalTypes";

export const initoalTasks: Task[] = [
  {
    id: "1",
    title: "Setup Redux Toolkit",
    description: "Install and configure Redux Toolkit for state management.",
    status: "todo",
  },
  {
    id: "2",
    title: "Design Homepage UI",
    description: "Create the homepage layout with Tailwind CSS.",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Implement Authentication",
    description: "Add login and signup functionality using Firebase Auth.",
    status: "done",
  },
  {
    id: "4",
    title: "Optimize API Calls",
    description:
      "Refactor API calls to reduce latency and improve performance.",
    status: "todo",
  },
  {
    id: "5",
    title: "Write Unit Tests",
    description:
      "Cover critical components with Jest and React Testing Library.",
    status: "in-progress",
  },
];
