import React, { useState, useEffect } from "react";
import "./ScreenTooSmall.css";

const ScreenTooSmall = ({ children, threshold = 768 }) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < threshold);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < threshold);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  if (isSmall) {
    return (
      <div className="screen-too-small-overlay">
        <div className="screen-too-small-content">
          <img
            src="/img/apple_logo.svg"
            alt="Apple logo"
            className="apple-logo"
          />
          <p>You need a bigger screen to view this website.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ScreenTooSmall;
