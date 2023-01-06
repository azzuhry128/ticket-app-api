const express = require("express");
const mongoose = require("mongoose");

const ticket = require("./models/ticket.model");

const port = 3000;
const app = express();

mongoose.set("strictQuery", true);

const dbURI =
  "mongodb+srv://azure128:marklima@cluster0.ss2tnqf.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(port, () =>
      console.log(`listening to port ${port}, connected to db`)
    )
  )
  .catch((err) => console.log(err));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("im main route, please dont send request to me, wont reply anyway");
});

app.get("/ticket", (req, res) => {
  res.send(
    "welcome to ticket route, pls send POST request to input any ticket data"
  );
});

app.post("/ticket", (req, res) => {
  const { name, from, to, kids, adults, type, departure, phone } = req.body;

  const ticketData = new ticket({
    name: name,
    from: from,
    to: to,
    kids: kids,
    adults: adults,
    type: type,
    departure: departure,
    phone: phone,
  });

  ticketData.save();

  return res.send({ status: true, data: req.body });
});
