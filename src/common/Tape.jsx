import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Tape.css";

const items = [
  "UX/UI DESIGN .",
  " STORYTELLING .",
  "BRAND IDENTITY .",
  "PLAYFUL VISUALS  .",
  "3D EXPLORATION .",
    "UX/UI DESIGN .",

];

const InfiniteTape = () => {
  const tapeRef = useRef(null);

  useEffect(() => {
    const tape = tapeRef.current;
    const totalWidth = tape.scrollWidth;

    // Duplicate the content for seamless looping
    const clone = tape.innerHTML;
    tape.innerHTML += clone;

    // Animate using GSAP
    gsap.to(tape, {
      x: `-${totalWidth}px`,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="tape-container">
      <div className="tape" ref={tapeRef}>
        {items.map((item, index) => (
          <div className="tape-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteTape;
