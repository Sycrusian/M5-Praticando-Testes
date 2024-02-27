import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";
import { toDoList } from "../database/database";
import { AppError } from "../errors/AppError";

@injectable()
export class Validate {
  public todo(req: Request, res: Response, next: NextFunction): void {
    const index = toDoList.findIndex(td => td.id === Number(req.params.id));
    if (index < 0) {
      throw new AppError(404, "ToDo Not Found");
    }
    res.locals.index = index;
    return next();
  }
}