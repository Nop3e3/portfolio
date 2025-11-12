import React, { useEffect, useState } from "react";
import "./Header.css";
import headervid from '../Assets/kling_20251025_Image_to_Video_eyes_blink_35_0.mp4';
import Navbar from "../components/Navbar";

export default function SplineEmbed() {
  useEffect(() => {
    // Dynamically load the Spline viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.99/build/spline-viewer.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <header className="header">       <Navbar />
  <div className="rightt"> <div className="textrightup">2025 Portfolio edition</div>
  <div className="textdown">
    <div className="top">scroll down 🡣 </div>
<div className="textrightdown"> A designer specialized in UX/U , passionate about creating human-centered interfaces. Whether it’s an app, website, or digital product , I aim to make every interaction feel effortless and human!</div>
 </div> </div>
  <div className="width">

<spline-viewer url="https://prod.spline.design/sldoHkumbP4pywag/scene.splinecode"></spline-viewer> </div>
    <video
         className="bg-video"
         src={headervid}
         autoPlay
         loop
         muted
         playsInline
       />
 


 
    </header>
  );
}