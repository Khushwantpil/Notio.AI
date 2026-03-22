import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/currentuser", isAuth, getUser);
export default userRouter;