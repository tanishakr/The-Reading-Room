import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthentication } from "./context/AuthenticationProvider";

function App() {
  const [authUser, setAuthUser] = useAuthentication();
  console.log(authUser);

  return (
    <>
      {/* <Home></Home>
      <Course></Course> */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/course"
          element={
            authUser ? <Courses></Courses> : <Navigate to="/signup"></Navigate>
          }
        />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Toaster></Toaster>
    </>
  );
}

export default App;
