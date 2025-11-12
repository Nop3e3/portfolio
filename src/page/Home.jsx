import React from "react";
import "./Home.css";
import Folders from "../Homepage sections/Folders.jsx";
import Title from "../common/TitleandCaption";
import MainButton from "../common/MainButton";
import Sbutton from "../common/ButtonSecondary";
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
       <Title title="Interfaces I’ve Designed" 
       caption="A peek into the projects that shaped how I design, think, and play." />
      <Work />
      <div className="buttons">
      <MainButton label="View All" />
      <Sbutton label="Collab 🡥" />
      

      </div>
      <Title title="The Way I Work " 
       caption="(and Have Fun Doing It)" />
      <Folders />
    </div>

  );
}
