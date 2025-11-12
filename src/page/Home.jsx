import React from "react";
import "./Home.css";
import Tape from "../common/Tape.jsx";
import Header from "../Homepage sections/Header.jsx";
import About from "../Homepage sections/About.jsx";
import Work from "../Homepage sections/Work.jsx";
export default function Home() {
  return (
    <div className="homeee">
     <div className="adi"> <Header /></div>
      <Tape />
      <About />
      <Work />
    </div>
  );
}
