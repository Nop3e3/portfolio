import React from "react";
import './About.css';
import Tape from "../common/Tape.jsx";
import MainButton from "../common/MainButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import Sbutton from "../common/ButtonSecondary";
import Title from "../common/TitleandCaption";
import Folders from "../Homepage sections/Folders.jsx";

import Pinboard from "../Homepage sections/Pinboard.jsx";

export default function About() {
  return (
    <div className="Contact">
  
      <div className="sticky">
          <Tape  /> </div>
     
<Navbar/>
   <Title title="The Way I Work " 
       caption="(and Have Fun Doing It)" />
      <Folders />
      <div className="dottedinteractionthingie">
            <div className="titleee">
            <div className="ttl">What Do I Even Do ?</div> 
            <div className="captiont">Basically, I Design Things That Make Sense (and Look Good) .From UX flows to UI visuals, I build digital experiences that connect with people and help products shine.</div> 
                 <div className="buttons">
      <MainButton label="View All" />
      <Sbutton label="Collab 🡥" />
      

      </div></div> 
      <Pinboard /></div>
<Footer />
    </div>

  );
}
