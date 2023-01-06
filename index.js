const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

const ticketRouter = require("./routes/ticket.route");

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", ticketRouter);
