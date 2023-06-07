import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function connectDatabase() {
  await mongoose.connect(process.env.DATABASE_URI);
}

connectDatabase();

const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test",
  });
});

app.use("/signin", (req, res) => {
  // Add logic to call database with user schema and credentials
  // res.send()
});

app.listen(8080, () => console.log("API running"));
