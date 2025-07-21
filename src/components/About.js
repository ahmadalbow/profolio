import React from "react";
import FooterWhite from "./FooterWhite";
import Skills from "./Skill";
import "./About.css"; // <‑‑ custom tweaks live here
import MathSection from "./MathSection";
import TextAnimation from "./TextAnimation";
export default function About() {
  return (
    <div>
      <section className="p-5 container">
        {/* Subtitle */}
        <p className="job-name"></p>
        <TextAnimation
          text="Full Stack Developer"
          className="job-name"
          direction="top"
        ></TextAnimation>
        {/* Name */}

        <TextAnimation
          text="Ahmad Albow"
          className="ahmad-albow"
          stagger={0.05}
          direction="bottom"
        ></TextAnimation>
        {/* Tagline */}
        <p className="ahmad-dis"></p>
        <TextAnimation
          mode="words"
          text="I am someone who loves challenges, enjoys solving seemingly impossible
          problems, and thinks outside the box to come up with creative
          solutions"
          className="ahmad-dis"
          stagger={0.04}
        ></TextAnimation>
        <div className="about-grid">
          {/* Portrait – spans 2 rows */}
          <img
            src="/img/Frame 3.png"
            alt="Portrait of Ahmad Albow"
            className="portrait"
          />
        </div>
        <div className="section-container">
          <Skills />
          <MathSection />
        </div>
      </section>
      <FooterWhite />
    </div>
  );
}
