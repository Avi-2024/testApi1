import Router from "express";
import * as authController from "../controller/auth.controller.js"
import { homePage } from "../controller/home.controller.js";

const router = Router();

// router.get("/register",authController.getRegisterPage);
// router.get("/login",authController.getLoginPage);

router.route("/register").get(authController.getRegisterPage).post(authController.postRegister);
router.route("/login").get(authController.getLoginPage).post(authController.postLogin);
router.route("/").get(homePage)

export const authRouters = router;