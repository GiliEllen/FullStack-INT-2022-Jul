//npm init
//npm i express @types/node @types/express nodemon

//app.get app.post app.delete app.patch app.put
//get info add      delete       update
//app.use

import express from "express";
const app = express();
const port = 3000;

app.use(express.json()) // to get body from client (body = data from client);
app.use(express.static("public")); // express knows static files exist on public folder

interface User {
    name: string, 
    age: number
}

const users:User[] = [{name: "Gili", age: 27},{name: "moshe", age: 35}]

app.get("/api/users", (req,res) => {
    try {
        setTimeout(() => {
            res.send({users: users})
        },5000)
        
    } catch (error) {
        res.send({error: error.message})
    }
})

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})

