import express from "express";
import { config } from "dotenv"
import pg from "pg"

config();

export const db = new pg.Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
});

db.connect()
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("internal database error: ", error);
  });