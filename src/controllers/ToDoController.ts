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

  public update(req: Request, res: Response): Response {
    const response = this.services.update(Number(res.locals.index), req.body);
    return res.status(200).json(response);
  }

  public delete(req: Request, res: Response): Response {
    this.services.delete(Number(res.locals.index));
    return res.status(204).send();
  }
}