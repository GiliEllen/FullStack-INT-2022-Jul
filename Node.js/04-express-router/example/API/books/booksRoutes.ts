import express from "express";
import { getAllBooks } from "./booksCtrl";

const router = express.Router();

router.get("", getAllBooks)

export default router