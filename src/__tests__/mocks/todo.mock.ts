import { Todo, CreateTodo, UpdateTodo } from "../../interfaces/todo";

export const todoMock: Todo = {
  id: "1",
  title: "Example",
  description: "Description"
};

export const todoCreateMock: CreateTodo = {
  title: "Example",
  description: "Description"
}

export const todoUpdateMock: UpdateTodo = {
  description: "Gangway!!"
}

export const todoListMock: CreateTodo[] = [
  {
    title: "Example",
    description: "Description"
  },
  {
    title: "Water plants",
    description: "Once a day"
  },
  {
    title: "Pay bills",
    description: "Once a month"
  }
];