// index.js  ✅ clean version
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ← MOVE UP
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import ScreenTooSmall from "./components/ScreenTooSmall";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ScreenTooSmall>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<App></App>} />
      </Routes>
    </BrowserRouter>
  </ScreenTooSmall>
);

reportWebVitals();
