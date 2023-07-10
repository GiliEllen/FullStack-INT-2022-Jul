import express from "express";
import dotenv from "dotenv";
import { orders, products } from "./util/products";
import cors from "cors";

const app = express();

dotenv.config();

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 
// }

app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000" }));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//   next();
// });

app.get("/orders", (req, res) => {
  console.log("Returning orders");

  res.send(orders);
});

app.get("/products", (req, res) => {
  res.send({ products });
});
app.patch(`/products/:id`, (req, res) => {
  try {
    const id = Number(req.params.id);

    const { item } = req.body;
    const idx = products.findIndex((product) => {
      return product.id == id;
    });
    if (idx == -1) throw Error("no idx");

    products[idx].price = item * 100

    res.send({ products });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});
