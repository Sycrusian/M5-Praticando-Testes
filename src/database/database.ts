import { ITodo } from "../interfaces/todo";

let id: number = 1;

export let toDoList: ITodo[] = [];

export const resetToDoList = () => {
  toDoList = [];
}

export const generateId = () => {
  return id++;
}