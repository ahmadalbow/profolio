import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

const MemoryImage = ({ bwImages, colourImages = [], alt = "" }) => {
  /* references to BOTH img tags (top + inside .svg-img) */
  const imgRefs = useRef([]);
  const timeline = useRef(null);

  /* preload so rapid swaps have no jank */
  useEffect(() => {
    [...bwImages, ...colourImages].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [bwImages, colourImages]);

  /* build the GSAP timeline once */
  useEffect(() => {
    if (!imgRefs.current.length) return;

    /* repeat BW list until it feels “film‑like” */
    const flashes = [...bwImages];
    while (flashes.length < 10) flashes.push(...bwImages);

    const tl = gsap.timeline({ paused: true });

    flashes.forEach((src, i) =>
      tl.to(imgRefs.current, {
        duration: 0.4 / (i + 1), // faster every step
        attr: { src },
        filter: "grayscale(100%)",
      })
    );

    colourImages.forEach((src) =>
      tl.to(imgRefs.current, {
        duration: 0.08,
        attr: { src },
        filter: "grayscale(0%)",
      })
    );

    timeline.current = tl;
  }, [bwImages, colourImages]);

  const play = () => timeline.current?.restart();

  /* keeps ALL existing style hooks: svg-container & svg-img */
  return (
    <div className="svg-container" onMouseEnter={play}>
      <img
        ref={(el) => (imgRefs.current[0] = el)}
        src={bwImages[0] || colourImages[0] || ""}
        alt={alt}
      />
      <div className="svg-img">
        <img
          ref={(el) => (imgRefs.current[1] = el)}
          src={bwImages[0] || colourImages[0] || ""}
          alt={alt}
        />
      </div>
    </div>
  );
};

MemoryImage.propTypes = {
  bwImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  colourImages: PropTypes.arrayOf(PropTypes.string),
  alt: PropTypes.string,
};

export default MemoryImage;
