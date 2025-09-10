import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/* <Home></Home>
      <Course></Course> */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/course" element={<Courses></Courses>} />
        <Route path="/signup" element={<Signup></Signup>} />

      </Routes>
    </>
  );
}

export default App;
