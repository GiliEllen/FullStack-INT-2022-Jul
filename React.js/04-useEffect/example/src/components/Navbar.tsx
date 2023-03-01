import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [resourceType, setResourceType] = useState<string>("posts");
  
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
};

export default Navbar;
