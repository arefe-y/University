const { Router } = require("express");

const userController = require("../controllers/userController");
const { validate } = require("../middleware/userValidations");

const router = new Router();

//GET users/register
router.get("/register", userController.getRegisterPage);

//GET users/login
router.get("/login", userController.getLoginPage);

//GET users/logout
router.get("/logout", userController.logout);

//POST users/register
router.post("/register", validate, userController.createUser);

//POST users/login
router.post("/login", userController.handleLogin, userController.rememberMe);

module.exports = router;
