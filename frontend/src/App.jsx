// eslint-disable-next-line no-unused-vars
import React from "react";
import Mainpage from "./components/mainpage";
import { Routes, Route } from "react-router-dom";
import AddPost from "./components/addPost";
import SinglePost from "./components/singlePost";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/create" element={<AddPost/>}/>
        <Route path="view/:id" element={<SinglePost />}/>
      </Routes>
      <Mainpage />
    </div>
  );
}
