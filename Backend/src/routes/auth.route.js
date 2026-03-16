const express = require("express")
const authController = require("../controller/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")

const Router = express.Router()

Router.post("/register",authController.registerController)
Router.post("/login",authController.loginContoller)
Router.get("/get-me",authMiddleware.authUser,authController.getMe)
Router.get("/logout",authController.logoutUser)



module.exports = Router