import React, { useEffect, useRef, useState } from "react";
import "./Work.css";
import Card from "../common/WorkAccordion";
import { supabase } from "../Supabase"; // make sure this path is correct

export default function Work() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1); // which card is overlapping
  const [works, setWorks] = useState([]);

  useEffect(() => {
    // Fetch projects from Supabase
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("uxprojects")
        .select("*")
        .order("rank", { ascending: true });

      if (error) {
        console.error("Error fetching UX projects:", error);
      } else if (data) {
        setWorks(data);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setInView(rect.top < window.innerHeight && rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    let isScrolling = false;
    const overlapAmount = 450;
    const gapFill = 60;

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

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        card.style.transition = "transform 0.4s ease";

        if (i <= nextIndex) {
          card.style.transform = `translateX(-${i * overlapAmount}px)`;
        } else {
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
            key={work.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="card-wrapper"
          >
            <Card
              image={work.cover_image || work.image1_optional}
              title={work.title}
              caption={work.date || work.category1} 
              category={work.category2 || work.category1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
