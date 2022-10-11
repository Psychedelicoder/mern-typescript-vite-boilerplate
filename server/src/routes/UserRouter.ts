import express, { Router } from "express"
import { getAllUsers, createUser } from "../controllers/UserController";

export const UserRouter: Router = express.Router();

UserRouter.get("/", getAllUsers)
UserRouter.post("/create", createUser)
