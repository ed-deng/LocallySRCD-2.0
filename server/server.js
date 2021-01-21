const path = require("path");
// importing express here 👇
const express = require("express");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./controllers/googleCredentials");

// requiring routers here
const apiRouter = require("./routes/api.js");
const signupRouter = require("./routes/signup.js");
const loginRouter = require("./routes/login.js");
const googleRouter = require("./routes/google");

// parsing any JSON body we get first
app.use(express.json());

// flow check -> quick check what requests we get from the client instead of checking the Network Tab in Chrome DevTools
app.use((req, res, next) => {
  console.log(`
  *** FLOW METHOD ***\n
  URL: ${req.url}\n
  BODY: ${req.body}\n
  METHOD: ${req.method}\n`);
  return next();
});

app.use(
  cookieSession({
    name: "LocallySCRD",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// route handlers here 🤹
app.use("/api", apiRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/google", googleRouter);

/*** MAIN PAGE ***/

// directs the request to the assets folder for images
app.use("/assets", express.static(path.join(__dirname, "../client/assets")));
// for the devServer
app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

// catch all
app.use("*", (req, res, next) => {
  return res.status(404).send("This is not the page you're looking for...");
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "Interval Server Error" },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

// app.listen moved to start.js file because when running tests, app.listen
// needs to be run from the test file so there are no "port in use" conflicts

module.exports = app;
