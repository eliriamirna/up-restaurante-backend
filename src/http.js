import express from "express";
import path from "path";
import { createServer } from "http";
import cors from "cors";
import "reflect-metadata";

import "./database";
import { routes } from "./routes";

const app = express();

const http = createServer(app);

app.use(express.json());

app.use(cors());

app.use("/public", express.static(path.resolve(__dirname, "..", "public")));

app.use(routes);

export { http };
