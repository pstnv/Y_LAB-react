import express from "express";

// routers
import { router as authRouter } from "./authRouter.js";

const router = express.Router();

// routes
router.use("/api/v1/auth", authRouter);

export { router };
