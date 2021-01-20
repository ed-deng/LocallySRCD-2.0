const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const passport = require("passport");
require("../controllers/loginCredentials");

// router.post('/', userController.getUser, (req, res) => {
//   res.status(200).json(res.locals);
// });

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = router;
