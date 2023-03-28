import React, { useEffect, useState } from "react";
import { socket } from "../sockets/socket";

const MessageContainer = () => {
  const [messageList, setMessageList] = useState<any[]>([{message: "Start To Chat!"}]);
  useEffect(() => {
    console.log("useEffect on message container")
    socket.on("send_message", (message) => {
        console.log(message)
      setMessageList(prevState => [...prevState, message]);
    }); 
    socket.on('welcome', (message) => {
        console.log(message)
      setMessageList(prevState => [...prevState, message]);
    })

    return () => {
        socket.off("welcome")
        socket.off("send_message")
    }
  }, []);
  return (
    <div>
      <h1>messages:</h1>
      <ul>{messageList.map((message) => { return (<li>{message.message}</li>)})}</ul>
    </div>
  );
};

export default MessageContainer;
