import express from "express";
import {getUsers, register, Login, Logout} from "../controllers/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', register);
router.post('/login', Login);
router.get('/token', refreshToken)
router.delete('/logout', Logout);

export default router;