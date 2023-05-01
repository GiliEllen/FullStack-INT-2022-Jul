import express from "express";
import connection from "./DB/database";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";

const cookieParser = require("cookie-parser");
const saltRounds = 10;


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
app.post("/api/insert-into-movies", (req, res) => {
  const { title, year, runtime, director, actors, plot, posterUrl } = req.body;
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

app.post("/api/register", (req: express.Request, res: express.Response) => {
  try {
    const { firstName, lastName, email, password, rePassword } = req.body;
    if (!firstName || !lastName || !email || !password || !rePassword)
      throw new Error("missing data from client on register");

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    const query = `INSERT INTO users (email, first_name, last_name, password) VALUES ('${email}', '${firstName}', '${lastName}', '${hashPassword}')`;
    connection.query(query, (error, results, fields) => {
      try {
        if (error) throw error;

        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Coudln't load secret from .env");
        //@ts-ignore
        const cookie = { userID: results.insertId };
        const JWTCookie = jwt.encode(cookie, secret);

        res.cookie("userId", JWTCookie);
        res.send({ ok: true, message: results });
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error: error });
      }
    });
  } catch (error) {
    res.status(500).send({ notOK: error });
  }
})

app.post("/api/users/login", (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new Error("no data from client login in login");
    const query = `SELECT * from users WHERE email='${email}'`;
    connection.query(query, async (err, results, fields) => {
      try {
        if (err) throw err;
        const isMatch = await bcrypt.compare(password, results[0].password);
        if (!isMatch) throw new Error("Email or password incorrect");

        const cookie = { userID: results[0].user_id };
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Couldn't load secret from .env");

        const JWTCookie = jwt.encode(cookie, secret);

        res.cookie("userId", JWTCookie);
        res.send({ ok: true, userArray: results });
      } catch (error) {
        console.log(err);
        res.status(500).send({ ok: false, error: err });
      }
    });
  } catch (error) {
    res.status(500).send({ notOK: error });
  }
})

app.get("/api/users/get-all-users", (req, res) => {
  try {
    const query = `SELECT * FROM users`;
    connection.query(query, (err, results) => {
      if (err) throw err;
      const query2 = 'SELECT * FROM movies'
      connection.query(query2, (err2, results2) => {
        try {
          if (err2) throw err2;
          res.send({results: results, results2:results2})
        } catch (error) {
          res.status(500).send({ok: false, error: error.message})
        }
      })
    })
  } catch (error) {
    res.status(500).send({ok: false, error: error.message})
  }
})

import bbRoutes from "./API/blockbuster/bbRoutes";
app.use("/api/bb", bbRoutes)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
