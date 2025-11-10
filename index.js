const express = require("express");
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = 3000;
app.use(cors())
app.use(express.json())



const uri =
  "mongodb+srv://FinEase-server:Gw7AZ62EoIxhLY2l@cluster0.lhjffsh.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);




app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
