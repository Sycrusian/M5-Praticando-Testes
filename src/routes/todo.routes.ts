import { Router } from "express";
import { container } from "tsyringe";
import { ToDoController } from "../controllers/ToDoController";
import { ToDoServices } from "../services/ToDoServices";
import { Validate } from "../middlewares/Validate";
import { ParseRequest } from "../middlewares/ParseRequest";
import { createTodoSchema, updateTodoSchema } from "../schemas/todo";

export const todoRouter = Router();

container.registerSingleton("ToDoServices", ToDoServices);
const controller = container.resolve(ToDoController);
const validate = container.resolve(Validate);

todoRouter.post("/", 
  ParseRequest.execute({ body: createTodoSchema }), 
  (req, res) => controller.create(req, res));

todoRouter.get("/", 
  (req, res) => controller.readAll(req, res));

todoRouter.patch("/:id", 
  ParseRequest.execute({ body: updateTodoSchema }), 
  (req, res, next) => validate.todo(req, res, next), 
  (req, res) => controller.update(req, res));

todoRouter.delete("/:id", 
  (req, res, next) => validate.todo(req, res, next), 
  (req, res) => controller.delete(req, res));