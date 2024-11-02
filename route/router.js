import Router from "express";
import * as authDirect from '../controllers/appContoller.js';
import Auth from "../../middlewares/auth.js";

const router = Router();



// POST METHODS  //sending data 
router.route("/register").post(authDirect.register);//here endpoints are /register

// router.route("/registerMail").post();//here endpoints are /registerMail

router.route("/authenticate").post((req, res) => res.end());//here endpoints are /authons

router.route("/login").post(authDirect.login);//here endpoints are /login


// GET METHODS   // storing 
router.route("/user/:username").get(authDirect.getUser);//userwith username  //getUser()
router.route("/generateOTP").get(authDirect.generateOTP);//generate OTP
router.route("/verifyOTP").get(authDirect.verifyOTP);//verify OTP
router.route("/createResetSession").get(authDirect.verifyUser, authDirect.createResetSession);//reset all variables 


// PUT METHODS  //allow us to update data from existing application or page 
router.route("/updateuser").put(Auth, authDirect.updateUser);//update by profile 
router.route("/resetPassword ").put(authDirect.resetPassword);//chaneg password   

export default router;