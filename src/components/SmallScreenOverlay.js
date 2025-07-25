import React, { useState, useEffect } from "react";
import "./SmallScreenOverlay.css";

const SmallScreenOverlay = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmall(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isSmall) return null;
  return (
    <div className="small-screen-overlay">
      <img src="/img/logo_w.svg" alt="logo" />
      <p>You need a bigger screen to view this website.</p>
    </div>
  );
};

export default SmallScreenOverlay;
