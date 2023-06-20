import express from "express";
import {sendEmail, forgotPassword} from "./authCtrl";

const router = express.Router();

router
.post("/send-email", sendEmail)
.post("/forgot-password", forgotPassword)

export default router;
