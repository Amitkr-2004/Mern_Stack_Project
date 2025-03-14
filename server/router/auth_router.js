const express=require("express");
const router=express.Router();
const authcontroller=require("../controller/auth_controller.js")
const {signUpSchema,LoginSchema}=require("../validators/auth_validators.js")
const validate=require("../middlewares/validate_middleware.js")
const authmiddleware=require("../middlewares/auth_middleware.js")

router.route("/").get(authcontroller.home);

router.route("/register").post(validate(signUpSchema),authcontroller.register);

router.route("/login").post(validate(LoginSchema),authcontroller.login);

router.route("/user").get(authmiddleware,authcontroller.user);

module.exports=router;