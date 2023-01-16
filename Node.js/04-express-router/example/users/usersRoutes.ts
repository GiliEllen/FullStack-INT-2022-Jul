import express from "express";
import { getUserById, addUser, getAllUsers, getUserBook } from "./usersCtrl";

const router = express.Router();

router
.get("", getAllUsers)
.get("/:id", getUserById)
.get("/:userId/books/:bookId", getUserBook)
.post("", addUser);


export default router;
