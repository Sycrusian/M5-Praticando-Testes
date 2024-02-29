import { z } from "zod";
import { createTodoSchema, todoSchema, updateTodoSchema } from "../schemas/todo";

export type Todo = z.infer<typeof todoSchema>;
export type CreateTodo = z.infer<typeof createTodoSchema>;
export type UpdateTodo = z.infer<typeof updateTodoSchema>;