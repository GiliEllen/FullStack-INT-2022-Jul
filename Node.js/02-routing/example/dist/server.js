const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
    res.send(`hello`);
});
app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
