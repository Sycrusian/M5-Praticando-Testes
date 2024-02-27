import { ITodo, TCreateTodo } from "../../interfaces/todo";

export const todoMock: ITodo = {
  id: 1,
  title: "Example",
  description: "Description"
};

export const todoCreateMock: TCreateTodo = {
  title: "Example",
  description: "Description"
}

export const todoListMock: ITodo[] = [
  {
    id: 1,
    title: "Example",
    description: "Description"
  },
  {
    id: 2,
    title: "Water plants",
    description: "Once a day"
  },
  {
    id: 3,
    title: "Pay bills",
    description: "Once a month"
  }
];