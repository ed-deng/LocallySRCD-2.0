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
    // successRedirect: "/",
    failureRedirect: "/login",
  }),
  (req, res) => {
    // console.log("this is the res: ", res.body);
    // console.log(req.body);
    // console.log("THIS IS WHAT WE WANT", req.user);
    res.status(200).json(req.user);
  }
);

router.get("/", userController.getGoogleUser, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = router;
