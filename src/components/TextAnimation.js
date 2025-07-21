import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import "./TextAnimation.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animated text that reveals characters or words on scroll from a specified direction.
 *
 * Props:
 *  - text (string): the text content to animate
 *  - mode ("letters"|"words"): animate per character or per whole word
 *  - direction ("left"|"right"|"top"|"bottom"): entry direction
 *  - duration (number): animation duration (seconds) for each item
 *  - stagger (number): time between each item’s animation (seconds)
 *  - className (string): additional CSS class(es) for the container
 */
const TextAnimation = ({
  text,
  mode = "letters",
  direction = "left",
  duration = 0.5,
  stagger = 0.02,
  className = "",
}) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  // collect refs for each item (letter or word)
  itemsRef.current = [];
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) itemsRef.current.push(el);
  };

  useEffect(() => {
    const fromVars = { autoAlpha: 0 };
    switch (direction) {
      case "right":
        fromVars.x = 80;
        break;
      case "left":
        fromVars.x = -80;
        break;
      case "top":
        fromVars.y = -80;
        break;
      case "bottom":
        fromVars.y = 80;
        break;
      default:
        fromVars.x = -80;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 120%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(itemsRef.current, fromVars, {
      x: 0,
      y: 0,
      autoAlpha: 1,
      duration,
      ease: "power3.out",
      stagger,
      clearProps: "transform,opacity",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [text, mode, direction, duration, stagger]);

  // build JSX items array based on mode
  const content =
    mode === "words"
      ? text.split(" ").map((word, i, arr) => (
          <React.Fragment key={i}>
            <span ref={addToRefs} className="letter">
              {word}
            </span>
            {i < arr.length - 1 && " "}
          </React.Fragment>
        ))
      : text.split("").map((char, i) =>
          char === " " ? (
            <React.Fragment key={i}> </React.Fragment>
          ) : (
            <span key={i} ref={addToRefs} className="letter">
              {char}
            </span>
          )
        );

  return (
    <div ref={containerRef} className={`text-animation ${className}`.trim()}>
      {content}
    </div>
  );
};

TextAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(["letters", "words"]),
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  duration: PropTypes.number,
  stagger: PropTypes.number,
  className: PropTypes.string,
};

TextAnimation.defaultProps = {
  mode: "letters",
  direction: "left",
  duration: 1,
  stagger: 0.04,
  className: "",
};

export default TextAnimation;
