import React, { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import useAxiosFetch from "../hooks/useGet";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, earum
        illum numquam praesentium corrupti maiores voluptates a sapiente!
        Distinctio expedita inventore rem voluptate architecto ratione non
        libero voluptatum veniam ipsam?
      </p>

      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}
    </div>
  );
};

export default Home;
