const express=require("express");
const router=express.Router();
const ContactForm=require("../controller/Contact_controller.js")

router.route("/contact").post(ContactForm)

module.exports=router;
