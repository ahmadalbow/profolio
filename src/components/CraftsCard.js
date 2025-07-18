import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CraftsCard.css";

gsap.registerPlugin(ScrollTrigger);

const CraftsCard = ({
  company,
  title,
  description,
  imageSrc,
  imageAlt = "",
  className = "",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    // example fade‑up on scroll
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

  return (
    <div
      ref={containerRef}
      className={`crafts-card container-fluid min-vh-100 d-flex align-items-center text-white ${className}`}
    >
      <div className="row w-100 justify-content-center px-3">
        <div className="col-8 col-md-9 d-flex justify-content-center align-items-center p-4 mb-4 mb-md-0">
          <div className="svg-container">
            <img src={imageSrc} alt={imageAlt} />
            <div className="svg-img">
              <img src={imageSrc} alt={imageAlt} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-2 d-flex flex-column justify-content-between">
          <div>
            <h2
              className="text-uppercase mb-2 fs-6 text-secondary"
              style={{ letterSpacing: "0.2rem" }}
            >
              {company}
            </h2>
            <h1 className="mb-4 display-4">{title}</h1>
          </div>
          <h6
            className="mb-0 text-secondary"
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
};

export default CraftsCard;
