// Navbar.js
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useMediaQuery({ maxWidth: 810 });

  useEffect(() => {
    // Only highlight nav link for section currently in view
    const sectionIds = ["home", "about", "projects", "experience", "contact"];
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
        to="home"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold${
          activeSection === "home" ? " active" : ""
        }`}
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold${
          activeSection === "about" ? " active" : ""
        }`}
      >
        About
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold${
          activeSection === "projects" ? " active" : ""
        }`}
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="experience"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold${
          activeSection === "experience" ? " active" : ""
        }`}
      >
        Experience
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        offset={-100}
        duration={600}
        spy={true}
        className={`nav-underline text-white text-xl font-bold${
          activeSection === "contact" ? " active" : ""
        }`}
      >
        Contact
      </ScrollLink>
    </>
  );

  return (
    <nav className="flex items-center justify-between px-10 py-2 bg-black shadow-lg border-b-2 border-white sticky top-0 z-50">
      <a href="#home" className="flex-shrink-0">
        <img
          src="/GR_logo.png"
          alt="Logo"
          style={{ height: "80px", width: "auto" }}
        />
      </a>
      {isMobile ? (
        <Menu right width={220} burgerButtonClassName="bm-burger-button">
          <div className="flex flex-col space-y-6 mt-10">
            {React.Children.map(navLinks.props.children, (child) =>
              React.cloneElement(child, { className: "text-white text-xl font-bold px-4 py-2" })
            )}
          </div>
        </Menu>
      ) : (
        <div className="flex space-x-8">{navLinks}</div>
      )}
    </nav>
  );
}

export default Navbar;
