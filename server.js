import express from "express";
import { config } from "dotenv";
import { db } from "./config/db.js"
import pg from "pg"

config();

const app = express()
const port = process.env.SERVER_PORT;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server is running on port ${port}`);
});