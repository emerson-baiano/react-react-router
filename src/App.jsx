import { useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Post from "./Pages/Post";
import "./App.css";
import PageNotFound from "./Pages/404";

function App() {
  useEffect(() => {
    const getData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    getData();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<Post />} />

        <Route path="/" element={<Navigate to="home" />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
