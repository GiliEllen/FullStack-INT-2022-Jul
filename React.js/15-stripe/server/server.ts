import express from "express";
import dotenv from "dotenv";
import { products } from "./util/products";
import cors from "cors";
import stripe from "stripe"

const app = express();

dotenv.config();

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.use(express.json());
app.use(cors({ origin: CLIENT_URL }));

app.get("/products", (req, res) => {
  res.send({ products });
});
//check
app.post("/api/checkout", async (req, res) => {
  try {
    const { cart } = req.body;
    if (!cart) throw new Error("no cart from body");
    //@ts-ignore
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: cart.map((cartItem) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: cartItem.title,
            },
            unit_amount: cartItem.price,
          },
          quantity: cartItem.amount,
        };
      }),
      success_url: `${CLIENT_URL}/success`,
      cancel_url: `${CLIENT_URL}/cancel`,
    });
    res.send({ok: true, url: session.url})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});
