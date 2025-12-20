import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.svg";
import MusicPlayer from "./Musicplayer";
import menu from "../Assets/menu.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [rotation, setRotation] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let currentRotation = 0;
    let ticking = false;

    const updateRotation = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      currentRotation += delta * 0.1;
      setRotation(currentRotation);
      lastScrollY = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateRotation);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="Navbarr">
        <img className="logo" src={logo} alt="Logo" />
        <MusicPlayer />

        <div className="menucon" onClick={() => setMenuOpen(!menuOpen)}>
          <img
            className="fit rotating-menu"
            src={menu}
            alt="Menu"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
      </div>

      <div className={`nav-menu-overlay ${menuOpen ? "show" : ""}`}>
        <div className="nav-menu-content">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link to="/process" onClick={() => setMenuOpen(false)}>Process</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}
