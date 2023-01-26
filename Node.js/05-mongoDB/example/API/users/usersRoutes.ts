import express from "express";
import { getAllUsers, login, register, getUserById, updateUserByID } from "./usersCtrl";

const router = express.Router();

router
// "/api/user"
.get("", getAllUsers)
.get("/:id", getUserById)
.post("/login", login)
.post("/register", register)
.patch("/:id", updateUserByID)


export default router;
