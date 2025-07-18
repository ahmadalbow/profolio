import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Crafts.css";
import CraftsCard from "./CraftsCard";

gsap.registerPlugin(ScrollTrigger);

const Crafts = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".landing-container", // the container holding your canvas
      start: "bottom+=100 center", // when the bottom of the landing container hits the top of the viewport
      onEnter: () => {
        gsap.to([".crafts-container"], {
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        });
        gsap.to([".black-full"], {
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        });
      },
      onLeaveBack: () => {
        gsap.to([".black-full"], {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
        gsap.to([".crafts-container"], {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      },
    });
  }, []);

  return (
    <div className="crafts-container ">
      <div className="container">
        <div className="crafts-header text-center ">CRAFTS</div>
        <CraftsCard
          company="FRAUNHOFER"
          title="Umbrella"
          description={
            "A Platform That manage tens of the most complicated tools in the semi-conductors World"
          }
          imageSrc={"/img/umbrella.svg"}
        ></CraftsCard>
      </div>
    </div>
  );
};

export default Crafts;
