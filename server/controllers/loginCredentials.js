const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/userModel");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      console.log("THIS IS THE user: ", user);
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      // if (!user.validPassword(password)) {
      //   return done(null, false, { message: "Incorrect password." });
      // }

      return done(null, user);
    });
  })
);
