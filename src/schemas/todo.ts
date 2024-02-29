import { z } from "zod";
import { defaultSchema } from "./default";

export const todoSchema = defaultSchema.extend({
  title: z.string().min(1),
  description: z.string().min(1)
});

export const createTodoSchema = todoSchema.omit({ id: true });
export const updateTodoSchema = createTodoSchema.partial();