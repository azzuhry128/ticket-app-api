const express = require("express");
const mongoose = require("mongoose");

const train = require("./models/train.model");
const plane = require("./models/plane.ticket");
const ship = require("./models/ship.ticket");

const port = 3000;
const app = express();

// const username = "azure128";
// const password = "marklima";
// const cluster = "cluster0";
// const database = "tickets";

mongoose.set("strictQuery", true);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("im main route, please dont send request to me, wont reply anyway");
});

app.get("/train", async (req, res) => {
  const trainTickets = await train.find({});
  res.send(trainTickets);
});

app.get("/plane", async (req, res) => {
  const planeTickets = await plane.find({});
  res.send(planeTickets);
});

app.get("/ship", async (req, res) => {
  const shipTickets = await ship.find({});
  res.send(shipTickets);
});

app.post("/train", (req, res) => {
  const { name, from, to, kids, adults, type, departure, phone } = req.body;

  const ticketData = new train({
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

  return res.send({ status: 200, data: req.body });
});

app.post("/plane", (req, res) => {
  const { name, from, to, kids, adults, type, departure, phone } = req.body;

  const ticketData = new plane({
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

  return res.send({ status: 200, data: req.body });
});

app.post("/ship", (req, res) => {
  const { name, from, to, kids, adults, type, departure, phone } = req.body;

  const ticketData = new ship({
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

  return res.send({ status: 200, data: req.body });
});

const dbURI =
  "mongodb+srv://azure128:marklima@cluster0.ss2tnqf.mongodb.net/tickets?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(port, () =>
      console.log(`listening to port ${port}, connected to db`)
    )
  )
  .catch((err) => console.log(err));
