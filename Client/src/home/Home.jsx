import React from "react";
import Footer from "../Footer";
import Freebooks from "../components/Freebooks";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Freebooks></Freebooks>
      <Footer></Footer>
    </>
  );
}

export default Home;
