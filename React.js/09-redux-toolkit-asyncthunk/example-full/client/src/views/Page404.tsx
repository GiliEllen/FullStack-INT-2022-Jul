import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1>Page404</h1>
      <p>Go back <Link to="/">Home</Link></p>
    </div>
  );
};

export default Page404;
