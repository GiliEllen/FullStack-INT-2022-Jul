import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

import usersRoutes from "./API/users/usersRoutes";
app.use("/api/users", usersRoutes);

import booksRoutes from "./API/books/booksRoutes";
app.use("/api/v1/books", booksRoutes)

// app.get("/api/v1/books", (req,res) => {
//   res.send({books: "books"})
// })


app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});
