import express from "express"; 
import fs from 'fs';

const app = express();
const port = 4000;

const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textInput);
app.use(express.static('public'));
app.use(express.json());

app.get("/text", (req:express.Request, res:express.Response) => {
    res.send(textInput)
})


app.post("/find-text", (req:express.Request, res:express.Response) => {
    const {userName} = req.body;
    console.log(userName)
    res.send(`${userName} would like to know: ${textInput}`)
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})

// const day = new Date().getDay();
// const month = new Date().getMonth();
// const today = `${day}.${month}`

// const textOutput = `this is what we know about node.js: ${textInput} \n created on ${today}`

// fs.writeFileSync("./txt/output.txt", textOutput);
// console.log("file was created");

// let name = "gili"
// const text = "hi my name is " + name + "!";
// const text2 = `hi my name is ${name}!`;

// `abcde ${var}!`
// console.log(text2)