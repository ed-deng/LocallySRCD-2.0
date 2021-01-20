const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { clientID, clientSecret } = require("../settings");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL: "http://localhost:8080/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
