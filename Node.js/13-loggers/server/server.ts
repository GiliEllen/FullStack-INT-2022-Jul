import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { tasks } from "./util/tasks";
import morgan from "morgan";
import winston from "winston";

import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import CategoriesModel from "./API/categories/categoriesModel";
import ProductModel from "./API/products/productModel";

dotenv.config();

const PORT = process.env.PORT;
const mongodb_uri = process.env.MONGO_URI;
const app = express();

const CLIENT_URL = process.env.CLIENT_URL;

// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));
// app.use(morgan('combined', { stream: accessLogStream }))

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

mongoose.set("strictQuery", true);

mongoose
  .connect(mongodb_uri)
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
  });

// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple(),
//   }));
// }

// wait till read
// const fileContents = fs.readFileSync("./files/file.txt", "utf-8")
// console.log(fileContents)

//read asyncly
// fs.readFile("./files/file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(data)
//   }
// })

// // fs.writeFileSync("./files/greet.txt", "helloWorld!")
// fs.writeFile("./files/greet.txt", "hello World!", {flag: "a"}, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("file written")
//   }
// })

app.get("/tasks", (req, res) => {
  try {
    const taskType = req.query.taskType;
    // throw new Error("Error!")
    if (taskType) {
      const taskByType = tasks.filter((task) => {
        return task.type == taskType;
      });
      logger.log({
        level: "info",
        message: "task by type!",
      });
      res.send({ taskByType });
    } else {
      logger.info("all tasks");
      res.send({ tasks });
    }
  } catch (error) {
    logger.error(`ON /tasks: ${error.message}`);
    res.status(500).send({ error: error.message });
  }
});
app.get("/categories", async (req, res) => {
  try {
    const categoriesDB = await CategoriesModel.find();
    res.status(201).send({ ok: true, categoriesDB });
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productDB = await ProductModel.findById(id).populate("category");
    if (!productDB) throw new Error("no product found");
    res.status(201).send({ ok: true, productDB });
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.post("/api/categories", async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) throw new Error("no title on req body");

    const categoryDB = await CategoriesModel.create({ title });
    res.status(201).send({ ok: true });
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.post("/products", async (req, res) => {
  try {
    const { title, price, image, description, selected } = req.body;
    if (!title) throw new Error("no title on req body");

    const productDB = await ProductModel.create({
      title,
      price,
      image,
      description,
      category: selected,
    });
    res.status(201).send({ ok: true, productDB });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});
