import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Crafts from "./components/Crafts";
import Footer from "./components/Footer";
import About from "./components/About";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function Home() {
  return (
    <>
      <Landing />
      <Crafts />
      <Footer />
    </>
  );
}
function App() {
  const location = useLocation();
  return (
    <div>
      <Layout></Layout>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
