const express = require("express");

const fs = require("fs");

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());

const textInput = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textInput);

console.log("hi");

// const textOutput = `this is waht we know about node: ${textInput}.\n Created on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOutput);

// console.log("file has been created")

// node server

//npm init --y

app.get("/", (req, res) => {
  res.send(`${textInput}`);
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
