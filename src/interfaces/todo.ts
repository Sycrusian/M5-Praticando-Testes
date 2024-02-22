export interface ITodo {
  id: number;
  title: string;
  description: string;
}

export type TCreateTodo = Omit<ITodo, "id">;