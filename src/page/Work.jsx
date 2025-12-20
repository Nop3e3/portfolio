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
const Work = ({ portfolio }) => {

  // SAME loading logic as Projects.jsx
  if (!portfolio) {
    return (
      <div className="Carddds">
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="work">
      <div className="sticky">
        <Tape />
      </div>
     
<Navbar/>

      <Title />
      <Filters />


      <div className="Carddds">
        {portfolio.map((project) => (
          <Card
            key={project.id}
            image={project.cover_image}
            tag={project.category1 }
            title={project.title}
            role={project.role}
            buttonText="Know more"
          />
        ))}
      </div>

      <Pagination />
      <Footer />
    </div>
  );
};

export default Work;
