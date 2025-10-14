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
      {/* Animated background with gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 -z-10"></div>
      
      {/* Floating shapes for visual interest */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="fixed top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-20 left-1/3 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
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
