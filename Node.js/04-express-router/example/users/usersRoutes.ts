import express from "express";
import { getUserById, addUser, getAllUsers, getUserBook, deleteUser } from "./usersCtrl";

const router = express.Router();

router
// "/api/user"
.get("", getAllUsers)
.get("/:id", getUserById)
.get("/:userId/books/:bookId", getUserBook)
.post("", addUser)
.delete("/:id", deleteUser)



export default router;
