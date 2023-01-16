import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

import usersRoutes from "./users/usersRoutes";
app.use("/api/users", usersRoutes)

app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});

