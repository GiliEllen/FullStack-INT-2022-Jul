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

function getRandomNumber() {
    return Math.round(Math.random() * 2)
}

const users:User[] = [{name: "Gili", age: 27},{name: "moshe", age: 35}]
const images = ["https://www.allaboutgardening.com/wp-content/uploads/2022/01/Types-of-Flowers-in-Garden-1200x667.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1CskJCYvtqRI_N6aQAg31d7BLus6hbNwjxXzoQu376p5tfsCdBUmVmWaMN4eJ6ifjmw&usqp=CAU",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg?crop=0.66541xw:1xh;center,top&resize=480:*"]

app.get("/api/users", (req,res) => {
    try {
        setTimeout(() => {
            res.send({users: users})
        },500)
        
    } catch (error) {
        res.send({error: error.message})
    }
})

app.get("/api/images", (req, res) => {
    console.log(req.body)
        const imageSrc = images[getRandomNumber()];
        res.send({imageSrc: imageSrc, myName: "gili", friend: "ruth"})
})

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})

