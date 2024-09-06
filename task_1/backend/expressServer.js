import "dotenv/config";
import "express-async-errors";

import express from "express";
const app = express();

// middleware import
import cors from "cors";
// router import
import { router } from "./routes/index.js";
// error handler import
import errorHandler from "./middleware/error-handler.js";

// middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(router);

// error
app.use(errorHandler);

export { app };
