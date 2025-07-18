import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CraftsCard.css";

gsap.registerPlugin(ScrollTrigger);

const CraftsCard = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center  text-white">
      <div className="row w-100 justify-content-center px-3">
        {/* Umbrella icon with gradient border */}
        <div className="col-8 col-md-9 d-flex justify-content-center align-items-center p-4 mb-4 mb-md-0">
          <div className="svg-container">
            <img src="/img/umbrella.svg" alt="Logo" />
            <div className="svg-img">
              <img src="/img/umbrella.svg" alt="Logo" />
            </div>
          </div>
        </div>

        {/* Text section */}
        <div className="col-12 col-md-2 d-flex flex-column justify-content-between">
          <div>
            <h2
              className="text-uppercase mb-2 fs-6  text-secondary"
              style={{ letterSpacing: "0.2rem" }}
            >
              FRAUNHOFER
            </h2>
            <h1 className="mb-4 display-4">Umbrella</h1>
          </div>
          <h6
            className="mb-0 text-secondary"
            style={{ "font-size": "0.9rem", "font-weight": "400" }}
          >
            A Platform That manage tens of the most complicated tools in the
            semi-conductors World
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CraftsCard;
