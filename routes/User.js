const express = require("express");
const router = express.Router();
const {userRegister,loginUser,changePassword} = require("../controllers/User");


//Public Routes



router.post("/register",userRegister);
router.post("/login",loginUser);






module.exports = router;