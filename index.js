const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

const registrationModel = require("./models/registration.model.js");

registrationModel;

//routes must be written down below
const registrationRoute = require("./routes/registration.routes.js");
const loginRoute = require("./routes/login.routes.js");

app.set("view engine", "ejs")

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public"));

app.use(registrationRoute);
app.use(loginRoute);

app.get("/", (req, res) => {
    res.render("index");
}); 

app.get("/registration", (req, res) => {
    res.render("register")
})

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
