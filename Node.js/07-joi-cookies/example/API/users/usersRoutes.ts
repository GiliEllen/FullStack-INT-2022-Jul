import express from "express";
import {
  getAllUsers,
  login,
  register,
  getUserById,
  getUser,
} from "./usersCtrl";

const router = express.Router();

router
  // "/api/user"
  .get("", getAllUsers)
  .get("/get-user-by-cookie", getUser)
  .get("/:id", getUserById)
  .post("/login", login)
  .post("/register", register);

export default router;
