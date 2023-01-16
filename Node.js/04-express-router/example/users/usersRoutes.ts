import express from "express";
import { getUserById, addUser, getAllUsers } from "./usersCtrl";

const router = express.Router();

router.get("", getAllUsers)
.get("/:id", getUserById)
.post("", addUser);

export default router;
