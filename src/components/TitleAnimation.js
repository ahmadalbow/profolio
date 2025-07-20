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

  /* collect each letter’s span */
  lettersRef.current = [];
  const addToRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) lettersRef.current.push(el);
  };

  useEffect(() => {
    /* ─── scroll in / out ─── */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 65%", // tweak to taste
        toggleActions: "play reverse play reverse", // ↓ play | ↑ reverse
        // markers: true                  // uncomment to debug
      },
    });

    tl.fromTo(
      lettersRef.current,
      { x: -80, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.04,
        clearProps: "transform,opacity",
      }
    );

    /* ─── hover arrow ─── */
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl
      .to(lettersRef.current, { x: 50, duration: 0.5, stagger: 0.025 })
      .to(arrowRef.current, { x: 0, opacity: 1, duration: 0.3 }, "-=0.5");

    const el = containerRef.current;
    const play = () => hoverTl.play();
    const rev = () => hoverTl.reverse();
    el.addEventListener("mouseenter", play);
    el.addEventListener("mouseleave", rev);

    /* cleanup */
    return () => {
      el.removeEventListener("mouseenter", play);
      el.removeEventListener("mouseleave", rev);
      tl.kill();
      hoverTl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
