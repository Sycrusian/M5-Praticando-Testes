import { resetToDoList, toDoList } from "../../database/database";
import { todoCreateMock, todoListMock, todoMock, todoUpdateMock } from "../mocks/todo.mock";
import { request } from "../utils/request";

describe("Integration Test: ToDo Routes", () => {
  beforeEach(() => {
    resetToDoList();
  });

  test("Create todo route should create a todo", async () => {
    const data = await request.post("/todo").send(todoCreateMock).expect(201).then(response => response.body);
    expect(data).toStrictEqual(todoMock);
  });

  test("Read todo route should read all todos", async () => {
    todoListMock.forEach(todo => toDoList.push(todo));
    const data = await request.get("/todo").then(response => response.body);
    expect(data).toStrictEqual(todoListMock);
  });

  test("Update todo route should update todo correctly", async () => {
    todoListMock.forEach(todo => toDoList.push(todo));
    const data = await request.patch("/todo/1").send(todoUpdateMock).expect(200).then(response => response.body);
    console.log(data);
    expect(toDoList[0].description).toStrictEqual(todoUpdateMock.description);
  });

  test("Update route should throw an error if invalid todo", async () => {
    todoListMock.forEach(todo => toDoList.push(todo));
    await request.patch("/todo/999").send(todoUpdateMock).expect(404);
  });

  test("Delete todo route should delete todo correctly", async () => {
    todoListMock.forEach(todo => toDoList.push(todo));
    await request.delete("/todo/1").expect(204);
    expect(toDoList).toHaveLength(2);
  });

  test ("Delete route should throw an error if invalid todo", async () => {
    todoListMock.forEach(todo => toDoList.push(todo));
    await request.delete("/todo/999").expect(404);
  });
});