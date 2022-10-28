import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <h1>Posts List:</h1>
      <button onClick={() => navigate(+1)}>Next</button>
      {posts.map(({ id, title }) => {
        return (
          <Link key={id} to={`${id}`}>
            <h3>{title}</h3>
          </Link>
        );
      })}
    </>
  );
};

export default Posts;
