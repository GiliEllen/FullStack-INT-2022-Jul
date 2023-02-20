import express from "express";
import {
  getAllUsers,
  login,
  register,
  getUserById,
  getUser,
  logout,
  searchDB,
} from "./usersCtrl";
import { checkAccess, helloMiddleware } from "../middleware/middlewares";

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`userId is: ${val}`);
  next();
});

router
  .get("", helloMiddleware, checkAccess, getAllUsers)
  .get("/get-user-by-cookie", getUser)
  .get("/logout", logout)
  .get("/:id", getUserById)
  .post("/login", helloMiddleware, login)
  .post("/register", register)
  .post("/search/:category", searchDB);

export default router;
