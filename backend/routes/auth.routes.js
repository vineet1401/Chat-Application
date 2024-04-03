import express from 'express';

import {authLogin, authLogout, authSignup} from "../controller/auth.control.js"

const router = express.Router();



router.post("/login", authLogin);
router.post("/signup", authSignup);
router.get("/logout", authLogout);



export default router;