// Navbar.js
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [activeSection, setActiveSection] = useState("fooldal");
  const isMobile = useMediaQuery({ maxWidth: 810 });

  useEffect(() => {
    // Only highlight nav link for section currently in view
    const sectionIds = ["fooldal", "rolam", "projektek", "tapasztalat", "kapcsolat"];
    function handleScroll() {
      const scrollPos = window.scrollY + 200;
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
          found = true;
          break;
        }
      }
      if (!found) setActiveSection("");
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <ScrollLink
        to="fooldal"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold cursor-pointer${
          activeSection === "fooldal" ? " active" : ""
        }`}
      >
        Kezdőlap
      </ScrollLink>
      <ScrollLink
        to="rolam"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold cursor-pointer${
          activeSection === "rolam" ? " active" : ""
        }`}
      >
        Rólam
      </ScrollLink>
      <ScrollLink
        to="projektek"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold cursor-pointer${
          activeSection === "projektek" ? " active" : ""
        }`}
      >
        Projektek
      </ScrollLink>
      <ScrollLink
        to="tapasztalat"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold cursor-pointer${
          activeSection === "tapasztalat" ? " active" : ""
        }`}
      >
        Tapasztalat
      </ScrollLink>
      <ScrollLink
        to="kapcsolat"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold cursor-pointer${
          activeSection === "kapcsolat" ? " active" : ""
        }`}
      >
        Kapcsolat
      </ScrollLink>
    </>
  );

  return (
    <nav className="flex items-center justify-between px-10 py-2 glass backdrop-blur-md bg-opacity-10 shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <a href="#fooldal" className={`flex-shrink-0${!isMobile ? ' pl-16' : ''}`}>
        <img
          src="GR_logo.webp"
          alt="Logo"
          style={{ height: "80px", width: "auto" }}
          className="transition-all hover:scale-110 duration-300 filter brightness-110"
        />
      </a>
      {isMobile ? (
        <Menu right width={220} burgerButtonClassName="bm-burger-button">
          <ScrollLink
            to="fooldal"
            smooth={true}
            offset={-100}
            duration={600}
            spy={true}
            className="menu-item cursor-pointer"
            onClick={() => document.querySelector(".bm-cross-button")?.click()}
          >
            Kezdőlap
          </ScrollLink>
          <ScrollLink
            to="rolam"
            smooth={true}
            offset={-100}
            duration={600}
            spy={true}
            className="menu-item cursor-pointer"
            onClick={() => document.querySelector(".bm-cross-button")?.click()}
          >
            Rólam
          </ScrollLink>
          <ScrollLink
            to="projektek"
            smooth={true}
            offset={-100}
            duration={600}
            spy={true}
            className="menu-item cursor-pointer"
            onClick={() => document.querySelector(".bm-cross-button")?.click()}
          >
            Projektek
          </ScrollLink>
          <ScrollLink
            to="tapasztalat"
            smooth={true}
            offset={-100}
            duration={600}
            spy={true}
            className="menu-item cursor-pointer"
            onClick={() => document.querySelector(".bm-cross-button")?.click()}
          >
            Tapasztalat
          </ScrollLink>
          <ScrollLink
            to="kapcsolat"
            smooth={true}
            offset={-100}
            duration={600}
            spy={true}
            className="menu-item cursor-pointer"
            onClick={() => document.querySelector(".bm-cross-button")?.click()}
          >
            Kapcsolat
          </ScrollLink>
        </Menu>
      ) : (
        <div className="flex space-x-8 pr-16">{navLinks}</div>
      )}
    </nav>
  );
}

export default Navbar;
