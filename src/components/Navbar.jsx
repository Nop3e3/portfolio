import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.svg";
import MusicPlayer from "./Musicplayer";
import menu from "../Assets/menu.svg";

export default function Navbar() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let lastScrollY = 0;
    let currentRotation = 0;
    let ticking = false;

    const updateRotation = () => {
      // Gentle, realistic rotation
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;

      // Add smooth easing and limit speed
      currentRotation += delta * 0.1; // smaller multiplier = slower rotation
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
    <div className="Navbarr">
      <img className="logo" src={logo} alt="Logo" />
      <MusicPlayer />
      <div className="menucon">
        <img
          className="fit rotating-menu"
          src={menu}
          alt="Menu"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>
    </div>
  );
}
