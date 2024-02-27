import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { todoRouter } from "./routes/todo.routes";


export const app = express();

app.use(helmet());
app.use(json());

app.use("/todo", todoRouter);