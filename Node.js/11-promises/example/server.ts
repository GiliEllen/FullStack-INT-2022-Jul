import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import {logger, checkAccess} from "./API/middleware/middlewares"

export const app = express();

dotenv.config();

const mongodb_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;

// future implementation

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

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

  // import accessRoutes from "./API/access/accessRoutes";
  // app.use("/api/access", logger, accessRoutes)

  import usersRoutes from "./API/users/usersRoutes";
  app.use("/api/users", logger, usersRoutes);

app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});