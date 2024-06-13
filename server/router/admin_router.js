const express=require("express");
const adminRouter = require("../controller/admin_controller");
const authMiddleWare=require("../middlewares/auth_middleware")
const AdminMiddleware = require("../middlewares/admin_middleware")
const router=express.Router();

router.route("/users").get(authMiddleWare,AdminMiddleware,adminRouter.getAllUsers);

router.route("/users/:id").get(authMiddleWare,AdminMiddleware,adminRouter.getUserByID);

router.route("/users/update/:id").patch(authMiddleWare,AdminMiddleware,adminRouter.UpdateUserByID);

router.route("/users/delete/:id").delete(authMiddleWare,AdminMiddleware,adminRouter.deleteById)

router.route("/contact").get(authMiddleWare,AdminMiddleware,adminRouter.getAllContact);

router.route("/contacts/delete/:id").delete(authMiddleWare,AdminMiddleware,adminRouter.deleteContactById)

module.exports=router;
