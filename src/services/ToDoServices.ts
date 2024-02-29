import { injectable } from "tsyringe";
import { Todo, CreateTodo, UpdateTodo } from "../interfaces/todo";
import { prisma } from "../database/prisma";
import { todoSchema } from "../schemas/todo";

@injectable()
export class ToDoServices {
  public async create(data: CreateTodo): Promise<Todo> {
    const todo = await prisma.todo.create({ data });
    return todoSchema.parse(todo);
  }

  public async readAll(): Promise<Todo[]> {
    const todoList = await prisma.todo.findMany();
    return todoSchema.array().parse(todoList);
  }

  public async update(id: number, data: any): Promise<Todo> {
    const updatedTodo = await prisma.todo.update({ where: { id }, data });
    return todoSchema.parse(updatedTodo);
  }

  public async delete(id: number) {
    await prisma.todo.delete({ where: { id }});
  }
}