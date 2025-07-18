"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import "./Landing.css";
import { Link } from "react-scroll";
import { div } from "three/src/nodes/TSL.js";
export default function Landing() {
  const containerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initialize container width
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="trans-container">
      <div className="landing-container">
        <div ref={containerRef} className="container landing-container">
          <Canvas
            // Set dpr for better resolution on high DPI devices
            dpr={[1, Math.min(window.devicePixelRatio, 2)]}
          >
            {/* Set a custom background color (or leave it transparent) */}
            <color attach="background" args={["#fefefe"]} />

            {/* Environment Lighting */}
            <Environment preset="warehouse" background={false} />

            <Model containerWidth={containerWidth} />
            <directionalLight intensity={0} position={[0, 2, 3]} />
          </Canvas>
          <div className="landing-about">
            <p>I simplify, I humanize.</p>
            <Link
              className="landing-nav-link "
              to="about"
              smooth={true}
              duration={500}
            >
              <span style={{ textDecoration: "underline" }}>More about me</span>{" "}
              <span style={{ textDecoration: "none" }}>→</span>
            </Link>

            <p></p>
          </div>
        </div>
      </div>
      <div className="black-full"></div>
    </div>
  );
}
