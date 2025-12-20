import React from "react";
import './Contact.css';
import Tape from "../common/Tape.jsx";
import Title from "../Work Sections/Title.jsx"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import Conatctbox from "../Contact Sections/Contactbox.jsx";
export default function Contact() {
  return (
    <div className="Contact">
  
      <div className="sticky">
          <Tape  /> </div>
     
<Navbar/>

<div className="gnbb3d">
    <div className="lets">LET’S</div>
<Conatctbox/></div>
<div className="contactt">Connect</div>
<Footer />
    </div>

  );
}
