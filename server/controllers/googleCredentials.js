const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { clientID, clientSecret } = require("../settings");
const User = require("../models/userModel");
const findOrCreate = require("mongoose-findorcreate");

const googleController = {};

// googleController.login = (req, res, next) => {
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID,
//       clientSecret,
//       callbackURL: "http://localhost:8080/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       User.findOrCreate(
//         { username: profile.displayName },
//         { password: profile.displayName },
//         function (err, user) {
//           // console.log(user);
//           if (err) {
//             return next(err);
//           }
//           return done(null, profile);
//         }
//       );
//     }
//   )
// );
// };

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.authenticate("google", { scope: ["profile", "email"] });
// (req, res, next)

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL: "http://localhost:8080/google/callback",
    },
    (req, res, next) => return next(),
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate(
        { username: profile.displayName },
        { password: profile.displayName },
        function (err, user) {
          // console.log(user);
          if (err) {
            return done(err);
          }
          // res.cookie("test", "value");
          return done(null, profile);
        }
      );
    }
  )
);
