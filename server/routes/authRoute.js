import express from "express";
import { valiadateEmailAndPassword, validateUserParams, verifyToken } from "../middlewares/authMiddleware";
import { loginWithEmailAndPassword, signUpUser, getUsers, getRoles } from "../controller/authController";
import { verifyAdmin } from "../middlewares/recordMiddleware";
const router = express.Router();

router.post('/login', valiadateEmailAndPassword, loginWithEmailAndPassword );
router.post('/signup', validateUserParams,verifyToken, verifyAdmin, signUpUser);

router.get('/users', verifyToken,verifyAdmin, getUsers);
router.get('/roles', verifyToken,verifyAdmin, getRoles);

export default router;