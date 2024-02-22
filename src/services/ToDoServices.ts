import { generateId, toDoList } from "../database/database";
import { ITodo, TCreateTodo } from "../interfaces/todo";

export class ToDoServices {
  create(payload: TCreateTodo) {
    const todo: ITodo = {
      id: generateId(),
      title: payload.title,
      description: payload.description
    };
    toDoList.push(todo);
    return todo;
  }

  readAll() {
    return toDoList;
  }
}