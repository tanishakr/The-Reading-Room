import React from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import Course from "../Course";

function Courses() {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Course></Course>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Courses;
