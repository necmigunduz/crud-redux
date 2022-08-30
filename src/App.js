import { Route, Routes } from "react-router-dom";

import React from "react";
import PostList from "./features/posts/PostList";
import CreatePost from "./features/posts/CreatePost";
import EditPost from "./features/posts/EditPost";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/edit-post" element={<EditPost />} />
    </Routes>
  );
};

export default App;
