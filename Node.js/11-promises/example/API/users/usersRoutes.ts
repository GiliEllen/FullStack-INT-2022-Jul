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
  .get("/:id",checkAccess, getUserById)
  .post("/login", checkAccess, login) //no cookie of role
  .post("/register", register) // no cookie role
  .post("/search/:category", checkAccess, searchDB);

export default router;
