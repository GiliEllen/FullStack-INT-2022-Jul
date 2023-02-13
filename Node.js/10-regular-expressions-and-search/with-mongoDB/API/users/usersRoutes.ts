import express from "express";
import {
  getAllUsers,
  login,
  register,
  getUserById,
  getUser,
  logout,
  searchDB
} from "./usersCtrl";

const router = express.Router();

router
  // "/api/user"
  .get("", getAllUsers)
  .get("/get-user-by-cookie", getUser)
  .get("/logout", logout)
  .get("/:id", getUserById)
  .post("/login", login)
  .post("/register", register)
  .post("/search/:category", searchDB)

export default router;
