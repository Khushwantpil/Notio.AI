
import express from "express";
import { googleAuth, logout } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/google", googleAuth);
authRouter.get("/logout", logout);
//authRouter.post("/login", login);

export default authRouter;