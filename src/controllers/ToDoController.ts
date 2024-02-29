import { inject, injectable } from "tsyringe";
import { ToDoServices } from "../services/ToDoServices";
import { Request, Response } from "express";

@injectable()
export class ToDoController {
  constructor(@inject("ToDoServices") private services: ToDoServices) {}

  public async create(req: Request, res: Response): Promise<Response> {
    const response = await this.services.create(req.body);
    return res.status(201).json(response);
  }

  public async readAll(_req: Request, res: Response): Promise<Response> {
    const response = await this.services.readAll();
    return res.status(200).json(response);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const response = await this.services.update(res.locals.foundTodo.id, req.body);
    return res.status(200).json(response);
  }

  public async delete(_req: Request, res: Response): Promise<Response> {
    await this.services.delete(Number(res.locals.foundTodo.id));
    return res.status(204).send();
  }
}