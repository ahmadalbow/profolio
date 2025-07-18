import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import { gsap } from "gsap";

const Header = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const tl = useRef();
  const firstRender = useRef(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Check screen size on mount and on resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Only create the timeline on small screens
  useEffect(() => {
    if (!isSmallScreen) return;

    tl.current = gsap.timeline({ paused: true });

    // Animate the navbar container (#navbarNav) from collapsed to expanded
    tl.current.fromTo(
      "#navbarNav",
      { height: 0, opacity: 0 },
      {
        height: "calc(100vh - 70px)",
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
      },
      0 // start at time 0
    );

    // Animate the nav-links with a stagger
    tl.current.fromTo(
      ".nav-link",
      { y: -30, opacity: 0 },
      {
        y: -100,
        opacity: 1,
        duration: 0.6,
        stagger: 0.07,
        ease: "power2.inOut",
      },
      0.2 // offset to start at 0.2 seconds
    );
  }, [isSmallScreen]);

  // Control the timeline based on isMenuOpen, but skip animation on first render
  useEffect(() => {
    if (!isSmallScreen || !tl.current) return;

    if (firstRender.current) {
      // On initial load, force the timeline to the closed state without animation.
      tl.current.progress(0).pause();
      firstRender.current = false;
      return;
    }

    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen, isSmallScreen]);

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img
            src="/img/logo.svg"
            alt="Logo"
            style={{ width: "38px", height: "auto" }}
          />
        </a>

        {/* Custom Button for Mobile */}
        <button
          className={`menu-btn d-inline d-lg-none ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="menu-btn__burger"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
          onClick={toggleMenu}
        >
          <ul className="navbar-nav ms-auto" ref={container}>
            <li className="nav-item">
              <Link
                className="nav-link selected"
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Lab
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
