const express = require("express");
const bcrypt = require("bcrypt");
const SignupRoute = express.Router();
const { UserModel } = require("../models/user.model");
const { SignupMiddleware } = require("../middlewares/signupmiddleWare");

SignupRoute.post("/", SignupMiddleware, async (req, res) => {
  const { Email, Password } = req.body;
  const hashedPass = await bcrypt.hash(Password, 6);
  const newUser = new UserModel({ Email, Password: hashedPass,Type:"USER"});
  await newUser.save();
  res.send({ msg: "SignUp successfull" });
});


module.exports = { SignupRoute };
