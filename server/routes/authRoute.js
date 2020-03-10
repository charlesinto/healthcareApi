import express from "express";
import { valiadateEmailAndPassword } from "../middlewares/authMiddleware";
import { loginWithEmailAndPassword } from "../controller/authController";
const router = express.Router();

router.post('/login', valiadateEmailAndPassword, loginWithEmailAndPassword )

export default router;