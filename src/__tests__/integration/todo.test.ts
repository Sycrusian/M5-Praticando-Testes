import { response } from "express";
import { resetToDoList, toDoList } from "../../database/database";
import { todoCreateMock, todoListMock, todoMock } from "../mocks/todo.mock";
import { request } from "../utils/request";

describe("Integration Test: ToDo Routes", () => {
  beforeEach(() => {
    resetToDoList();
  });

  test("Create todo route should create a todo", () => {
    const data = request.post("/todo").send(todoCreateMock).expect(201).then(response => response.body);
    expect(data).toStrictEqual(todoMock);
  });

  test("Read todo route should read all todos", () => {
    todoListMock.forEach(todo => toDoList.push(todo));
    const data = request.get("/todo").then(response => response.body);
    expect(data).toStrictEqual(todoListMock);
  });
});