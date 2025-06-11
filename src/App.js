import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Tester from "./pages/test";

export default function App() {
  return (
    <div className="bg-[#202124] min-h-screen text-[#e0e0e0] transition-colors duration-500">
      <Navbar />
      <div id="test">
        <Tester />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
