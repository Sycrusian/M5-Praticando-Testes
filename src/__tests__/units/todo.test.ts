import { resetToDoList, toDoList } from "../../database/database";
import { ToDoServices } from "../../services/ToDoServices";
import { todoCreateMock, todoMock } from "../mocks/todo.mock";

describe("Unit Test: Todo Services", () => {
  const todoServices = new ToDoServices;

  beforeEach(() => {
    resetToDoList();
  });

  test("Create todo should work correctly", () => {
    const todo = todoServices.create(todoCreateMock);
    expect(todo).toStrictEqual(todoMock);
  });

  test("Reading database should work correctly", () => {
    toDoList.push(todoMock);
    const data = todoServices.readAll();
    expect(data).toHaveLength(1);
    expect(data[0]).toStrictEqual(todoMock);
  });
});