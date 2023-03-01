import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState([]);

  console.log("render");
  useEffect(() => {
    console.log("useEffect on mount and render");
  });
  useEffect(() => {
    console.log("on resource change");
    axios
      .get(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(({ data }) => console.log(data));
  }, [resourceType]);

  // useEffect(() => {
  //   console.log("on resource change");
  //   getResource();

  //   async function getResource() {
  //     try {
  //       const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);
  //       console.log(data)
  //       setItems(data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }, [resourceType]);

  useEffect(() => {
    console.log("on mount only");
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default Navbar;

//https://jsonplaceholder.typicode.com/
