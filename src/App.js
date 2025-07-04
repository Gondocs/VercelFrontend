import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white transition-colors duration-500">
      <Navbar />

      <div id="fooldal">
        <Home />
      </div>
      <div id="rolam">
        <About />
      </div>
      <div id="projektek">
        <Projects />
      </div>
      <div id="tapasztalat">
        <Experience />
      </div>
      <div id="kapcsolat">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
