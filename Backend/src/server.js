// Importing the modules

import express from "express";
import mongoose from "mongoose";
import Messages from "./data/dbMessages.js";
import Cors from "cors";
import Pusher from "pusher";

// Config the app

const app = express();
const port = process.env.PORT || 8000;

const pusher = new Pusher({
  appId: "1256548",
  key: "e1d5c19b1e95cc6fc7ca",
  secret: "95d838c5a8d4e2a138e5",
  cluster: "us2",
  useTLS: true
});

const db = mongoose.connection;

db.once("open", () => 
{
  console.log("The DB is connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch(); // We're waching this collection

  changeStream.on("change", (change) => 
  {
    console.log("The db is connected");

    console.log(change);

    if (change.operationType === "insert") 
    {
      console.log("The DB has been changed");
      const msgDetails = change.fullDocument;

      pusher.trigger("messagecontents", "inserted", 
      {
        message: msgDetails.message,
        name: msgDetails.user,
        timestamp: msgDetails.timestamp,
        received: msgDetails.received,
      });
    }
  });
});

// Config the middleware

app.use(express.json());
app.use(Cors());

app.use((req, res, next) => 
{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// BD Config

const uri =
  "mongodb+srv://admin:OBjlVpchnwynaMIy@cluster0.pqcgm.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(uri, 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }
);

// API routes

app.get("/", (req, res) => 
{
  res.status(200).send("This is the API to the whatsApp Clone");
});

app.post("/messages/new", (req, res) => 
{
  const dbMessages = req.body;

  Messages.create(dbMessages, (err, data) => 
  {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/messages/sync", (req, res) => 
{
  Messages.find((err, data) => 
  {
    if (err) 
    {
      res.status(500).send(err);
    } 
    else 
    {
      res.status(200).send(data);
    }
  });
});

// Listed

app.listen(port, () => console.log(`Listening in the port ${port}`));