import React, { useState } from "react";
import { socket } from "../sockets/socket";

export function MyForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: any) {
    event.preventDefault();
    // setIsLoading(true);
    console.log(value);
    socket.emit("send_message", { message: value });
    // const {data} = await axios.post('/api/messages/', {message:value, to: currentUser})

    // socket.timeout(5000).emit('create-something', value, () => {
    //   setIsLoading(false);
    // });
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}
