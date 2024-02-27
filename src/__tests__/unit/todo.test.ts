import "reflect-metadata";
import { resetToDoList, toDoList } from "../../database/database";
import { ToDoServices } from "../../services/ToDoServices";
import { todoCreateMock, todoListMock, todoMock, todoUpdateMock } from "../mocks/todo.mock";
import { container } from "tsyringe";

describe("Unit Test: Todo Services", () => {
  const todoServices = container.resolve(ToDoServices);

  beforeEach(() => {
    resetToDoList();
  });

  test("Create todo should work correctly", () => {
    const todo = todoServices.create(todoCreateMock);
    expect(todo).toStrictEqual(todoMock);
  });

  test("Reading database should work correctly", () => {
    todoListMock.forEach(todo => toDoList.push(todo));
    const data = todoServices.readAll();
    expect(data).toHaveLength(3);
    expect(data[0]).toStrictEqual(todoMock);
  });

  test("Updating database should work correctly", () => {
    toDoList.push(todoMock);
    const data = todoServices.update(0, todoUpdateMock);
    expect(data.description).toStrictEqual(toDoList[0].description);
  });

  test("Deleting from database should work correctly", () => {
    toDoList.push(todoMock);
    todoServices.delete(0);
    expect(toDoList).toHaveLength(0);
  });
});