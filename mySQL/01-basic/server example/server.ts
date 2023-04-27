import express from "express";
import connection from "./DB/database";

const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(express.static("client"));

app.post("/api/create-database", (req, res) => {
  const query = "CREATE DATABASE gili;";
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
app.post("/api/inser-into-movies", (req, res) => {
  const { title, year, runtime, director, actors, plot, posterUrl } = req.body;
  console.log(title, year, runtime, director, actors, plot, posterUrl);
  const query = `INSERT INTO blockbuster.movies (title, year, runtime, director, actors, plot, posterUrl) VALUES ("${title}", ${year}, ${runtime}, "${director}", "${actors}", "${plot}", "${posterUrl}");`;
  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;
      // console.log(results);
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
