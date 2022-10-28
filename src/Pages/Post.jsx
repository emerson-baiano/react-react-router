import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Post = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <h2>User ID: {post?.userId}</h2>
    </>
  );
};

export default Post;
