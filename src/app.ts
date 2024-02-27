import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { todoRouter } from "./routes/todo.routes";
import { container } from "tsyringe";
import { HandleErrors } from "./errors/HandleErrors";


export const app = express();

const errorHandling = container.resolve(HandleErrors);

app.use(helmet());
app.use(json());

app.use("/todo", todoRouter);

app.use(errorHandling.handleError);