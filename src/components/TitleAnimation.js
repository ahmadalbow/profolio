import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./TitleAnimation.css";

gsap.registerPlugin(ScrollTrigger);

const TitleAnimation = ({ text }) => {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const arrowRef = useRef(null);

  // Collect each letter’s span
  lettersRef.current = [];
  const addToRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  useEffect(() => {
    // Scroll‑in animation
    const entrance = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });
    entrance.fromTo(
      lettersRef.current,
      { x: -80, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.04,
        clearProps: "filter",
      }
    );

    // Hover animation: letters slide left, then arrow slides in
    const hoverTl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
    });
    hoverTl.to(lettersRef.current, {
      x: "+=50px",
      duration: 0.5,
      stagger: 0.03,
    });
    hoverTl.to(
      arrowRef.current,
      {
        x: "0px", // back to translateX(0)
        opacity: 1,
        duration: 0.3,
      },
      "-=0.5"
    );

    const el = containerRef.current;
    el.addEventListener("mouseenter", () => hoverTl.play());
    el.addEventListener("mouseleave", () => hoverTl.reverse());

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      entrance.kill();
      hoverTl.kill();
      el.removeEventListener("mouseenter", () => hoverTl.play());
      el.removeEventListener("mouseleave", () => hoverTl.reverse());
    };
  }, [text]);

  return (
    <h1 ref={containerRef} className="title-animation">
      {text.split("").map((char, i) => (
        <span key={i} ref={addToRefs} className="letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <i
        ref={arrowRef}
        className="fa-solid fa-arrow-right arrow-icon"
        style={{ "fontWeight ": 300 }}
      />
    </h1>
  );
};

export default TitleAnimation;
