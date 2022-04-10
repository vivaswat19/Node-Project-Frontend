import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="projects/" element={<Projects />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App
