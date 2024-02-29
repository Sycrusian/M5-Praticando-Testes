import "reflect-metadata";
import { ToDoServices } from "../../services/ToDoServices";
import { todoCreateMock, todoListMock, todoMock, todoUpdateMock } from "../mocks/todo.mock";
import { container } from "tsyringe";
import { prisma } from "../../database/prisma";

describe("Unit Test: Todo Services", () => {
  const todoServices = container.resolve(ToDoServices);

  beforeEach(async () => {
    await prisma.todo.deleteMany();
  });

  test("Create todo should work correctly", async () => {
    const todo = await todoServices.create(todoCreateMock);
    expect(todo.id).toBeDefined();
    expect(todo.title).toStrictEqual(todoCreateMock.title);
    expect(todo.description).toStrictEqual(todoCreateMock.description);
  });

  test("Reading database should work correctly", async () => {
    for (const todo of todoListMock) {
      await prisma.todo.create({ data: todo });
    }
    const data = await todoServices.readAll();
    expect(data).toHaveLength(3);
    expect(data[0].title).toStrictEqual(todoMock.title);
    expect(data[0].description).toStrictEqual(todoMock.description);
  });

  test("Updating database should work correctly", async () => {
    const createdTodo = await prisma.todo.create({ data: todoCreateMock});
    const data = await todoServices.update(Number(createdTodo.id), todoUpdateMock);
    expect(data.description).toStrictEqual(todoUpdateMock.description);
  });

  test("Deleting from database should work correctly", async () => {
    const createdTodo = await prisma.todo.create({ data: todoCreateMock });
    todoServices.delete(Number(createdTodo.id));
    const data = await prisma.todo.findMany();
    expect(data).toHaveLength(0);
  });
});