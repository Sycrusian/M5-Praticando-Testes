import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";
import { IRequestSchemas } from "../interfaces/request";

@injectable()
export class Validate {
  public async todo(req: Request, res: Response, next: NextFunction): Promise<void> {
    const foundTodo = await prisma.todo.findFirst({ where: { id: Number(req.params.id) } });
    if (!foundTodo) {
      throw new AppError(404, "ToDo Not Found");
    }
    res.locals.foundTodo = foundTodo;
    return next();
  }
}