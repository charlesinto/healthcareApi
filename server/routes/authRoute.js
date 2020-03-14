import express from "express";
import { valiadateEmailAndPassword, validateUserParams, verifyToken } from "../middlewares/authMiddleware";
import { loginWithEmailAndPassword, signUpUser } from "../controller/authController";
import { verifyAdmin } from "../middlewares/recordMiddleware";
const router = express.Router();

router.post('/login', valiadateEmailAndPassword, loginWithEmailAndPassword );
router.post('/signup', validateUserParams,verifyToken, verifyAdmin, signUpUser);

export default router;