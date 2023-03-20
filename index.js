// const train = require("./models/train.model"); | calling a model from another directory
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

const registrationModel = require("./models/registration.model.js");

registrationModel;

//routes must be written down below
const registrationRoute = require("./routes/registration.routes.js");
const loginRoute = require("./routes/login.routes.js");

// const requestTime = (req, res, next) => {
//   req.requestTime = Date.now();
//   next();
// };
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public"));
// app.use("/statics", express.static(__dirname + "/public"));
// app.use("*/images", express.static(__dirname + "public/images"));

app.use(registrationRoute);
app.use(loginRoute);

// app.use(requestTime);

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.get("/time", (req, res) => {
//   let responseText = "Hello world";
//   responseText += ` requested at: ${req.requestTime}`;
//   res.send(responseText);
// });

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
