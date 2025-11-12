import React, { useState } from "react";
import "./About.css";
import Seccbutton from "../common/ButtonSecondary";
import S from "../Assets/S.png";
import snoopywriting from "../Assets/snoopy writing.svg"; 
import stars from "../Assets/star stickers.png";
import applesticker from "../Assets/apple sticker.png";
import babyme from "../Assets/babyme.png";
import heartstamp from "../Assets/heart stamp.png";
import underline from "../Assets/underline.svg";

export default function About() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const bbme = e.currentTarget.querySelector(".bbme");
    const rect = bbme.getBoundingClientRect();

    // Calculate cursor position relative to bbme center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max tilt 10deg
    const rotateY = ((centerX - x) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="About">
      <div className="firsthalf">
        <div className="title">
          <div className="SoWhois">So, Who is </div>
          <div className="Salma">
            <img src={S} alt="S" />
            alma
          </div>
          <img src={underline} alt="underline" className="underline" />
        </div>
        <div className="description">
          part designer, part all-around maker. When I’m not designing digital
          experiences, I’m probably in the kitchen experimenting with a new
          recipe, crocheting a scarf, or painting whatever’s in my head that
          day. I love creating things that bring comfort, color, and meaning to
          everyday life.
        </div>
        <div className="tgthr">
          <div className="psst">Pssst, fun fact:</div>
          <div className="description">
            I treat my sketchbook and recipe notebook with the same level of
            obsession.
          </div>
        </div>
        <Seccbutton label="Know more" />
      </div>

      <div
        className="secondhalf"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="stickers">
          <div className="sstickers">
            <img className="widthh" src={applesticker} alt="apple sticker" />
            <img src={snoopywriting} alt="snoopy writing" />
          </div>

          <div className="sstickers">
            <img className="stars" src={stars} alt="star stickers" />
            <img className="widthh minus" src={heartstamp} alt="heart stamp" />
          </div>
        </div>

        <img
          className="bbme"
          src={babyme}
          alt="babyme"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
    </section>
  );
}
