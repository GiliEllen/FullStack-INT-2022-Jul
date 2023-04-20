import express from "express";
import http from "http";
import mysql from "mysql";
import connection from "./DB/database";

const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.post("/api/create-database", (req, res) => {
  const query = "CREATE DATABASE testDB;";
  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;
      console.log(results);
      res.send({ results, ok: true });
    } catch (error) {
      console.log(error);
      res.send({ ok: false, error: error.message });
    }
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
