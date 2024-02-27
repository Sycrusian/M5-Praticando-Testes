import { inject, injectable } from "tsyringe";
import { ToDoServices } from "../services/ToDoServices";
import { Request, Response } from "express";

@injectable()
export class ToDoController {
  constructor(@inject("ToDoServices") private services: ToDoServices) {}

  public create(req: Request, res: Response): Response {
    const response = this.services.create(req.body);
    return res.status(201).json(response);
  }

  public readAll(_req: Request, res: Response): Response {
    const response = this.services.readAll();
    return res.status(200).json(response);
  }
}