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
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Sophisticated dark background */}
      <div className="fixed inset-0 bg-black -z-10"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] -z-10"></div>
      
      {/* Floating gradient orbs for depth */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-float"></div>
      <div className="fixed top-40 right-10 w-96 h-96 bg-gray-400 rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-20 left-1/3 w-96 h-96 bg-gray-300 rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '4s' }}></div>
      
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
