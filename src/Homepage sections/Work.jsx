import React, { useEffect, useRef, useState } from "react";
import "./Work.css";
import Card from "../common/WorkAccordion";

import Work1 from "../Assets/work1.svg";
import Work2 from "../Assets/work2.svg";
import Work3 from "../Assets/work3.svg";
import Work4 from "../Assets/work4.svg";
import Work5 from "../Assets/work5.svg";
import Work6 from "../Assets/work6.svg";
import Work8 from "../Assets/work8.svg";
import Work9 from "../Assets/work9.svg";

export default function Work() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1); // which card is overlapping

  const works = [
    { image: Work1, title: "Sugar Pop: Pop Culture E-Magazine", caption: "Uni Project", category: "UI UX DESIGN" },
    { image: Work2, title: "Attijariwafa private sector web", caption: "Internship Project", category: "UI UX DESIGN" },
    { image: Work3, title: "East Sate : Real Estate Web", caption: "Uni Project", category: "UI UX DESIGN" },
    { image: Work4, title: "MUSE : AR Museum Web", caption: "Uni Project", category: "UI UX DESIGN" },
    { image: Work5, title: "Design Beats : Company Website", caption: "Internship", category: "UI UX DESIGN" },
    { image: Work6, title: "Verro: AI Art Mentor", caption: "Uni Project", category: "Art Direction" },
    { image: Work8, title: "Jothoor: Tea E-commerce web", caption: "Uni Project", category: "Art Direction" },
    { image: Work9, title: "The Nutcracker: Storytelling WEB", caption: "Uni Project", category: "UI UX DESIGN" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setInView(rect.top < window.innerHeight && rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    let isScrolling = false;
    const overlapAmount = 450; // how much each card overlaps
    const gapFill = 60; // how much remaining cards slide in

    const handleWheel = (event) => {
      if (!inView || isScrolling) return;
      event.preventDefault();

      let nextIndex = currentIndex;

      if (event.deltaY > 0 && currentIndex < cardsRef.current.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (event.deltaY < 0 && currentIndex >= 0) {
        nextIndex = currentIndex - 1;
      } else {
        return;
      }

      // Move cards up to currentIndex
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        card.style.transition = "transform 0.4s ease";

        if (i <= nextIndex) {
          // overlapping cards
          card.style.transform = `translateX(-${i * overlapAmount}px)`;
        } else {
          // remaining cards slide in a bit to close gap
          card.style.transform = `translateX(-${nextIndex * overlapAmount + (i - nextIndex) * gapFill}px)`;
        }

        card.style.zIndex = i + 1;
      });

      setCurrentIndex(nextIndex);

      isScrolling = true;
      setTimeout(() => (isScrolling = false), 300);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [inView, currentIndex]);

  return (
    <section className="Work" ref={sectionRef}>
       
      <div className="cards">
        {works.map((work, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="card-wrapper"
          >
            <Card
              image={work.image}
              title={work.title}
              caption={work.caption}
              category={work.category}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
