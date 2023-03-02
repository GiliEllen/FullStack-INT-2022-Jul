import React, { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState<object[]>([])
  //useEffect
  console.log("render");
  async function handleGetResource() {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      console.log(data);
      setItems(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log("on resource change");
    handleGetResource()
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <p> {JSON.stringify(item)}</p>
      })} 
    </>
  );
};

export default Navbar;
