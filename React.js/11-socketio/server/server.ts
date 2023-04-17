import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";


const app = express();

dotenv.config();

const mongodb_uri = process.env.MONGO_URI;
// const PORT = process.env.PORT;
const httpServer = createServer();

// future implementation
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

app.use(express.json());
app.use(cookieParser()); 



const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

httpServer.listen(4000); // PORT

io.on("connection", (socket) => {
  console.log(socket.id); 
  socket.emit('welcome', {message: "Welcome!"})
  socket.on("send_message", (message) => {
    console.log(message)
    io.sockets.emit("send_message", message);
    // socket.to(socketId).emit("send_message", message)
  })
});

// app.listen(PORT, () => {
//   console.log(`server is active on port : ${PORT}`);
// });
