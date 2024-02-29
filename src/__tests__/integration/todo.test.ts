import { prisma } from "../../database/prisma";
import { todoCreateMock, todoListMock, todoMock, todoUpdateMock } from "../mocks/todo.mock";
import { request } from "../utils/request";

describe("Integration Test: ToDo Routes", () => {
  beforeEach(async () => {
    await prisma.todo.deleteMany();
  });

  test("Create todo route should create a todo", async () => {
    const data = await request.post("/todo").send(todoCreateMock).expect(201).then(response => response.body);
    expect(data.id).toBeDefined();
    expect(data.title).toStrictEqual(todoMock.title);
    expect(data.description).toStrictEqual(todoMock.description);
  });

  test("Read todo route should read all todos", async () => {
    for (const todo of todoListMock) {
      await prisma.todo.create({ data: todo });
    }
    const data = await request.get("/todo").then(response => response.body);
    expect(data).toHaveLength(3);
    expect(data[0].title).toStrictEqual(todoMock.title);
    expect(data[0].description).toStrictEqual(todoMock.description);
  });

  test("Update todo route should update todo correctly", async () => {
    const createdTodo = await prisma.todo.create({ data: todoCreateMock });
    const data = await request.patch(`/todo/${createdTodo.id}`).send(todoUpdateMock).expect(200).then(response => response.body);
    expect(data.description).toStrictEqual(todoUpdateMock.description);
  });

  test("Update route should throw an error if invalid todo", async () => {
    await prisma.todo.create({ data: todoCreateMock });
    await request.patch("/todo/999999").send(todoUpdateMock).expect(404);
  });

  test("Delete todo route should delete todo correctly", async () => {
    const createdTodo = await prisma.todo.create({ data: todoCreateMock });
    await request.delete(`/todo/${createdTodo.id}`).expect(204);
    const data = await prisma.todo.findMany();
    expect(data).toHaveLength(0);
  });

  test ("Delete route should throw an error if invalid todo", async () => {
    const createdTodo = await prisma.todo.create({ data: todoCreateMock });
    await request.delete("/todo/999999").expect(404);
    const data = await prisma.todo.findMany();
    expect(data).toHaveLength(1);
  });
});