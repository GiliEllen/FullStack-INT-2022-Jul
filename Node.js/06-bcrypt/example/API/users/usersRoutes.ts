import express from "express";
import { getAllUsers, login, register, getUserById } from "./usersCtrl";

const router = express.Router();

router
// "/api/user"
.get("", getAllUsers)
.get("/:id", getUserById)
.post("/login", login)
.post("/register", register)


export default router;
