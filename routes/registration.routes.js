const express = require("express");
const router = express.Router();

router.get("/registration", (req, res) => {
  res.send("welcome to registration page");
});

router.post("/registration", (req, res) => {
  const input = req.body;

  const name = input.name;
  const username = input.username;
  const email = input.email;
  const password = input.password;

  const data = {
    name,
    username,
    email,
    password,
  };
  
  console.log(data);
  res.send(input);
});

module.exports = router;
