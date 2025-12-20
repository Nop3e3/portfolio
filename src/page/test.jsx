import React from "react";
import './Work.css';
import Tape from "../common/Tape.jsx";
import Title from "../Work Sections/Title.jsx"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import Card from "../Work Sections/Card.jsx";
import Work1 from "../Assets/work1.svg";
import Work2 from "../Assets/work2.svg";
import Work3 from "../Assets/work3.svg";
import Work4 from "../Assets/work4.svg";
import Work5 from "../Assets/work5.svg";
import Work6 from "../Assets/work6.svg";
import Work8 from "../Assets/work8.svg";
import Work9 from "../Assets/work9.svg";
import Filters from "../Work Sections/Filter.jsx"
import Pagination from "../Work Sections/Pagination.jsx";
export default function Work() {
  return (
    <div className="work">
  
      <div className="sticky">
          <Tape  /> </div>
     
<Navbar/>

 <Title/>
<Filters/>
<div  className="Carddds">
   <Card
          image={Work1}
        tag="UI UX DESIGN"
        title="Sugar Pop: Pop Culture E-Magazine"
        role="Uni Project"
        buttonText="Know more"
       
      />
         <Card
          image={Work2}
        tag="UI UX DESIGN"
        title="Attijariwafa private sector web"
        role="Attijariwafa Internship"
        buttonText="Know more"
       
      />
         <Card
          image={Work3}
        tag="UI UX DESIGN"
        title="East Sate : Real Estate Web"
        role="Uni Project"
        buttonText="Know more"
       
      />
         <Card
          image={Work4}
        tag="UI UX DESIGN"
        title="MUSE : AR Museum Web"
        role="Uni Project"
        buttonText="Know more"
       
      />
         <Card
          image={Work5}
        tag="UI UX DESIGN"
        title="Design Beats :Corp Web"
        role="Design Beats Internship"
        buttonText="Know more"
       
      />
         <Card
          image={Work6}
        tag="UI UX DESIGN"
        title="Jothoor: Tea E-commerce web"
        role="Uni Project"
        buttonText="Know more"
       
      />
</div>
<Pagination/>
<Footer />
    </div>

  );
}
