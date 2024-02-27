import { injectable } from "tsyringe";
import { generateId, toDoList } from "../database/database";
import { ITodo, TCreateTodo, TUpdateTodo } from "../interfaces/todo";

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

  public update(index: number, payload: TUpdateTodo) {
    const updatedTodo = {...toDoList[index], ...payload};
    toDoList[index] = updatedTodo;
    return updatedTodo;
  }

  public delete(index: number) {
    toDoList.splice(index, 1);
  }
}