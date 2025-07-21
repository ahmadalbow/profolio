import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";
import TextAnimation from "./TextAnimation";

gsap.registerPlugin(ScrollTrigger);

/**
 * Skills section with GSAP scroll‑triggered animation.
 * Each skill item slides in from the left with opacity fade.
 */
const DEFAULT_SKILLS = [
  "HTML",
  "CSS",
  "JS",
  "Python",
  "Django",
  "React",
  "SQL",
  "GIT",
];

function Skills({ skills = DEFAULT_SKILLS, onShowMore }) {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];
  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) itemRefs.current.push(el);
  };

  useEffect(() => {
    const elems = itemRefs.current;
    gsap.fromTo(
      elems,
      { x: -50, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="skills-section container py-5 position-relative"
    >
      <TextAnimation
        text="Skills"
        className="display-4 text-center mb-5 sec-title"
        stagger={0.05}
        direction="bottom"
      ></TextAnimation>
      <hr className="skills-divider" />

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-5 justify-content-center">
        {skills.map((skill) => (
          <div key={skill} ref={addToRefs} className="col">
            <div className="text-center skill-item">
              <div className="icon-wrapper d-flex align-items-center justify-content-center mx-auto mb-3">
                <img src={`/img/${skill.toLowerCase()}.svg`} alt={skill} />
              </div>
              <small
                className="text-muted text-uppercase"
                style={{ fontSize: "0.875rem" }}
              >
                {skill}
              </small>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more-wrapper d-flex align-items-center justify-content-center mt-5">
        <button
          type="button"
          className="btn btn-link text-decoration-none show-more-btn p-0"
          onClick={onShowMore}
        >
          See more
        </button>
      </div>
      <hr className="skills-divider mt-3" />
    </section>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  onShowMore: PropTypes.func,
};

export default Skills;
