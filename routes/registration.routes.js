const express = require("express");
const router = express.Router();

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
