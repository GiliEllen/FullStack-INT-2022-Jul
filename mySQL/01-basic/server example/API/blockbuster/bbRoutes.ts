import express from "express";
import { getAllProducts } from "./bbCtrl";

const router = express.Router();

router.get("/products", getAllProducts)

export default router;