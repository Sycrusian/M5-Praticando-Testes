import { injectable } from "tsyringe";
import { generateId, toDoList } from "../database/database";
import { ITodo, TCreateTodo } from "../interfaces/todo";

@injectable()
export class ToDoServices {
  public create(payload: TCreateTodo) {
    const todo: ITodo = {
      id: generateId(),
      title: payload.title,
      description: payload.description
    };
    toDoList.push(todo);
    return todo;
  }

  public readAll() {
    return toDoList;
  }
}