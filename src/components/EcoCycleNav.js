import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "./TextAnimation";
import FooterWhite from "./FooterWhite";
import "./Umbrella.css";

const DEFAULT_SKILLS = ["Django", "React", "MYSQL"];

const EcoCycleNav = () => {
  // register ScrollTrigger once
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // ref for skills container
  const skillsRef = useRef(null);

  // refs for each skill item
  const itemRefs = useRef([]);
  itemRefs.current = [];
  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  // animate skill items when they scroll into view
  useEffect(() => {
    if (!skillsRef.current) return;

    gsap.fromTo(
      itemRefs.current,
      { x: +100, autoAlpha: 0, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="umbrella-section container py-5">
      {/* Title */}
      <TextAnimation
        text=" Ecocycle Navigator"
        stagger={0.02}
        duration={0.7}
        className="umbrella-title"
      ></TextAnimation>
      {/* Meta info */}
      <div className="row umbrella-meta mb-5 justify-content-between">
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="line-bottom">
            <span className="umbrella-label">Role / Services</span>
          </div>
          <TextAnimation
            text="Main Developer"
            stagger={0.02}
            duration={0.5}
            className="umbrella-value"
            direction="bottom"
          ></TextAnimation>
        </div>
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="line-bottom">
            <span className="umbrella-label">Company</span>
          </div>
          <TextAnimation
            text="Infrasolid GmbH"
            stagger={0.02}
            duration={0.5}
            className="umbrella-value"
            direction="bottom"
          ></TextAnimation>
        </div>
        <div className="col-md-3">
          <div className="line-bottom">
            <span className="umbrella-label">Location &amp; Year</span>
          </div>
          <TextAnimation
            text="Dresden © 2024"
            stagger={0.02}
            duration={0.5}
            className="umbrella-value"
            direction="bottom"
          ></TextAnimation>
        </div>
      </div>

      {/* Laptop image */}
      <div className="umbrella-video text-center mb-5">
        <video
          src="/img/eco.mp4" // ← put your video in public/videos/…
          className="img-fluid" // same responsive helper as your image
          // show play/pause bar
          autoPlay
          muted // autoPlay only works if muted
          loop
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        />
      </div>
      {/* Skills grid */}
      <div
        className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-5 justify-content-center skills-cont"
        ref={skillsRef}
      >
        {DEFAULT_SKILLS.map((skill) => (
          <div key={skill} className="col" ref={addToRefs}>
            <div className="text-center skill-item">
              <div className="icon-wrapper d-flex align-items-center justify-content-center mx-auto mb-3">
                <img
                  src={`/img/${skill.toLowerCase()}.svg`}
                  alt={skill}
                  width={48}
                  height={48}
                />
              </div>

              <small className="text-muted text-uppercase skill-label">
                {skill === "SQL" ? "MySQL" : skill}
              </small>
            </div>
          </div>
        ))}
      </div>
      {/* Text animation */}
      <TextAnimation
        text=" I see math as an art. I love creating short, beautiful integrals and
        series that are almost impossible to solve. I’ve published over 100 very
        advanced problems in international math magazines like RMM, and 90% of
        them remain unsolved by anyone else."
        className="mx-auto umbrella-text"
        stagger={0.002}
        duration={0.5}
        direction="bottom"
      ></TextAnimation>

      {/* Footer */}
      <FooterWhite />
    </section>
  );
};

export default EcoCycleNav;
