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
            "A web Platform That manage tens of the complicated tools in the semi-conductors World"
          }
          imageSrc={"/img/umbrella.svg"}
          bwSrc="/img/umbrella_gray.png"
          colorSrc="/img/umbrella_big.png"
          imagePosition="right"
          link="umbrella"
        ></CraftsCard>
        <CraftsCard
          company="TU DRESDEN"
          title="Ecocycle Navigator"
          description={
            "EcoCycle Navigator is a web‑based bicycle routing tool that scores Dresden routes by safety, air quality, noise, traffic, and elevation"
          }
          imageSrc={"/img/umbrella.svg"}
          bwSrc="/img/navg.png"
          colorSrc="/img/navc.png"
          imagePosition="left"
          link="ecocycle_navigator"
        ></CraftsCard>
        <CraftsCard
          company="INFRASOLID"
          title="Mountain"
          description={
            "A web platform that controls multiple devices to automate complex processes involved  in  the manufacturing of infrared emitters."
          }
          imageSrc={"/img/umbrella.svg"}
          bwSrc="/img/mountainsg.png"
          colorSrc="/img/mountainsc.png"
          imagePosition="right"
          link="mountain"
        ></CraftsCard>
        <CraftsCard
          company="FREELANCING"
          title="Marina Portfolio"
          description={
            "A personal portfolio showcasing a talented multilingual professional fluent in seven languages"
          }
          imageSrc={"/img/umbrella.svg"}
          bwSrc="/img/marinag.png"
          colorSrc="/img/marinac.png"
          imagePosition="left"
          link="marina"
        ></CraftsCard>
      </div>
    </div>
  );
};

export default Crafts;
