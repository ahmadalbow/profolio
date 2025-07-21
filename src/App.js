import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Crafts from "./components/Crafts";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function Home() {
  return (
    <>
      <Landing />
      <Crafts />
    </>
  );
}
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
