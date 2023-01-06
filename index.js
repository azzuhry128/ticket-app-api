const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const port = 3000;

const ticketRouter = require("./routes/ticket.route");

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =
    "mongodb+srv://azure128:marklima@cluster0.ss2tnqf.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    console.log(`connected to database`);
  }
}

app.listen(port, function () {
  console.log(`app is listening to ${port}`);
});

main().catch(console.error);

app.use("/", ticketRouter);
