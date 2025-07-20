import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./CraftsCard.css";
import TitleAnimation from "./TitleAnimation";
import LiquidHoverImage from "./LiquidHoverImage";

gsap.registerPlugin(ScrollTrigger);

/**
 * A responsive card that showcases a craft project with an animated liquid‑wipe image.
 *
 * Props:
 *  - company (string, required): Name shown above the title.
 *  - title (string, required): Main title animated by <TitleAnimation>.
 *  - description (string, required): Short descriptive text.
 *  - imageSrc (string, required): Background image URL (decorative).
 *  - imageAlt (string): Alt text for the background image.
 *  - className (string): Additional card wrapper classes.
 *  - bwSrc (string, required): B/W source passed to <LiquidHoverImage>.
 *  - colorSrc (string, required): Color source passed to <LiquidHoverImage>.
 *  - liquidWidth (number): Display width for <LiquidHoverImage> (defaults to 1000).
 *  - liquidDuration (number): Animation duration (seconds) for <LiquidHoverImage> (defaults to 1).
 *  - imagePosition ("left" | "right"): Place big image on the left (default) or right on ≥ md screens.
 *  - link (string): Internal path that the user should be taken to when clicking the title or big image.
 */
const CraftsCard = ({
  company,
  title,
  description,
  imageSrc,
  imageAlt = "",
  className = "",
  bwSrc,
  colorSrc,
  liquidWidth = 1000,
  liquidDuration = 1,
  imagePosition = "left",
  link = null, // NEW
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 50 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  const rowDirectionClass =
    imagePosition === "right" ? "flex-md-row-reverse" : "";
  const PicPos = imagePosition === "right" ? "end" : "start";

  // Helper to optionally wrap elements with a <Link>
  const maybeWrapWithLink = (children) =>
    link ? (
      <Link
        to={link}
        className="text-decoration-none text-reset w-100 h-100 d-block"
      >
        {children}
      </Link>
    ) : (
      children
    );

  return (
    <div
      ref={containerRef}
      className={`crafts-card container-fluid d-flex align-items-center text-white ${className}`}
    >
      <div
        className={`row w-100 justify-content-center px-3 ${rowDirectionClass}`}
      >
        {/* Image / illustration */}
        <div
          className={`col-8 col-md-8 d-flex justify-content-${PicPos} align-items-center p-4 mb-4 mb-md-0`}
        >
          {maybeWrapWithLink(
            <div className="svg-container cursor-pointer">
              <img src={imageSrc} alt={imageAlt} />
              <div className="svg-img">
                <LiquidHoverImage
                  bwSrc={bwSrc}
                  colorSrc={colorSrc}
                  width={liquidWidth}
                  duration={liquidDuration}
                />
              </div>
            </div>
          )}
        </div>

        {/* Copy */}
        <div className="col-12 col-md-2 d-flex flex-column justify-content-between">
          <div>
            <h2
              className="text-uppercase mb-2 fs-6 text-secondary gradient-text"
              style={{ letterSpacing: "0.2rem" }}
            >
              {company}
            </h2>
            {maybeWrapWithLink(
              <h1 className="mb-4 display-4 cursor-pointer">
                <TitleAnimation text={title} />
              </h1>
            )}
          </div>
          <h6
            className="mb-0 text-secondary gradient-text"
            style={{ fontSize: "0.9rem", fontWeight: 400 }}
          >
            {description}
          </h6>
        </div>
      </div>
    </div>
  );
};

CraftsCard.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
  bwSrc: PropTypes.string.isRequired,
  colorSrc: PropTypes.string.isRequired,
  liquidWidth: PropTypes.number,
  liquidDuration: PropTypes.number,
  imagePosition: PropTypes.oneOf(["left", "right"]),
  link: PropTypes.string, // NEW
};

CraftsCard.defaultProps = {
  imageAlt: "",
  className: "",
  liquidWidth: 1000,
  liquidDuration: 1,
  imagePosition: "left",
  link: null,
};

export default CraftsCard;
