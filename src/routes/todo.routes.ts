import { Router } from "express";
import { container } from "tsyringe";
import { ToDoController } from "../controllers/ToDoController";
import { ToDoServices } from "../services/ToDoServices";

export const todoRouter = Router();

container.registerSingleton("ToDoServices", ToDoServices);
const controller = container.resolve(ToDoController);

todoRouter.post("/", (req, res) => controller.create(req, res));
todoRouter.get("/", (req, res) => controller.readAll(req, res));