import express from "express";
import cors from "cors";
import { corsOptions } from "./config/CorsOptions";
import { connection } from "./config/dbConn";
import CheckModel from "./API/checkModel";

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cors(corsOptions));

app.get("/api/check/sql", async (req, res) => {
  try {
    console.log("check");
    const query = "SELECT * FROM `check`"

    connection.query(query, (error, results) => {
      try {
        if (error) throw error;
        res.send({ ok: true, check: "Checked!", sqlResults: results });
      } catch (error) {
        res.status(500).send({ ok: false, error: error });
      }
    });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

app.get("/api/check/mongoose", async (req, res) => {
  try {
    console.log("check");

    const mongooseResult = await CheckModel.find();
    res.send({ ok: true, check: "Checked!", mongooseResult });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
