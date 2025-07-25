import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./SmallScreenOverlay.css";

const SmallScreenOverlay = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmall(window.innerWidth < 1249);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isSmall) return null;
  return (
    <div className="small-screen-overlay">
      <img
        src="/img/logo_w.svg"
        alt="Logo"
        style={{ width: "72px", height: "auto", marginBottom: "3rem" }}
      />
      <p>You need a bigger screen to view this website.</p>
    </div>
  );
};

export default SmallScreenOverlay;
