import express from "express";
import { Login, Logout, Register, bookmark, follow, getMyProfile, getOtherUser, unFollow } from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";


const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthenticated,bookmark);
router.route("/profile/:id").get(isAuthenticated,getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated,getOtherUser);
router.route("/follow/:id").post(isAuthenticated,follow);
router.route("/unfollow/:id").post(isAuthenticated,unFollow);


export default router;