import express from "express";
import userController from "../controllers/userController";
const router = express.Router();

router.route("/signup").post(userController.signup);

router.route("/login").post(userController.login);

export default router;