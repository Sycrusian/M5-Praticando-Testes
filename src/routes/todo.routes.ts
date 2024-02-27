import { Router } from "express";
import { container } from "tsyringe";
import { ToDoController } from "../controllers/ToDoController";
import { ToDoServices } from "../services/ToDoServices";
import { Validate } from "../middlewares/Validate";

export const todoRouter = Router();

container.registerSingleton("ToDoServices", ToDoServices);
const controller = container.resolve(ToDoController);
const validate = container.resolve(Validate);

todoRouter.post("/", (req, res) => controller.create(req, res));
todoRouter.get("/", (req, res) => controller.readAll(req, res));
todoRouter.patch("/:id", (req, res, next) => validate.todo(req, res, next), (req, res) => controller.update(req, res));
todoRouter.delete("/:id", (req, res, next) => validate.todo(req, res, next), (req, res) => controller.delete(req, res));