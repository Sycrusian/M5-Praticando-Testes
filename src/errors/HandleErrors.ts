import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";
import { injectable } from "tsyringe";

@injectable()
export class HandleErrors {
  handleError(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    return err instanceof AppError ?
      res.status(err.statusCode).json({ error: err.message }) :
      res.status(500).json({ error: "Internal Server Error "});
  }
}