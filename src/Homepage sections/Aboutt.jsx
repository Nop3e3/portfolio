import React, { useState, useEffect } from "react";
import "./About.css";
import Seccbutton from "../common/ButtonSecondary";
import S from "../Assets/S.png";
import snoopywriting from "../Assets/snoopy writing.svg"; 
import stars from "../Assets/star stickers.png";
import applesticker from "../Assets/apple sticker.png";
import babyme from "../Assets/babyme.png";
import heartstamp from "../Assets/heart stamp.png";
import underline from "../Assets/underline.svg";
import { supabase } from "../Supabase"; // adjust path if needed

export default function About() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [profileData, setProfileData] = useState({
    name: "",
    brief1: "",
    brief2: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      const { data, error } = await supabase.from("Profile").select("*");

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      // Extract the fields based on Input_type
      const nameRow = data.find((row) => row.Input_type.toLowerCase().includes("name"));
      const brief1Row = data.find((row) => row.Input_type.toLowerCase().includes("brief 1"));
      const brief2Row = data.find((row) => row.Input_type.toLowerCase().includes("brief 2"));

      setProfileData({
        name: nameRow?.input,
        brief1: brief1Row?.input ,
        brief2: brief2Row?.input ,
      });
    };

    fetchProfileData();
  }, []);

  const handleMouseMove = (e) => {
    const bbme = e.currentTarget.querySelector(".bbme");
    const rect = bbme.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
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
            {profileData.name}
          </div>
          <img src={underline} alt="underline" className="underline" />
        </div>
        <div className="description">
          {profileData.brief1 ||
            "part designer, part all-around maker. When I’m not designing digital experiences, I’m probably in the kitchen experimenting with a new recipe, crocheting a scarf, or painting whatever’s in my head that day. I love creating things that bring comfort, color, and meaning to everyday life."}
        </div>
        <div className="tgthr">
          <div className="psst">Pssst, fun fact:</div>
          <div className="description">
            {profileData.brief2 ||
              "I treat my sketchbook and recipe notebook with the same level of obsession."}
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
