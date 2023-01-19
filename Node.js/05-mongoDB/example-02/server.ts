import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

mongoose.set('strictQuery', true)

const mongo_uri = "mongodb+srv://Gili-Admin:vVRkGyPKCvDxPnK1@cluster0.7mbcr.mongodb.net/JulyDBTest?retryWrites=true&w=majority"

mongoose.connect(mongo_uri).then(res => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log("at mongoose.connect:")
    console.log(err.message)
})

import userRoutes from "./API/users/usersRoutes";
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});
