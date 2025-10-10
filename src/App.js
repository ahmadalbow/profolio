import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Crafts from "./components/Crafts";
import Footer from "./components/Footer";
import About from "./components/About";
import Umbrella from "./components/Umbrella";
import Mountain from "./components/Mountain";
import EcoCycleNav from "./components/EcoCycleNav.js";
import Marina from "./components/Marina.js";
import SmallScreenOverlay from "./components/SmallScreenOverlay";
import Kubus from "./components/Kubus";
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
      <SmallScreenOverlay />
      <Layout></Layout>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/umbrella" element={<Umbrella />} />
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/ecocycle_navigator" element={<EcoCycleNav />} />
        <Route path="/marina" element={<Marina />} />
        <Route path="/Kubus-Anschreiben" element={<Kubus />} />
      </Routes>
    </div>
  );
}

export default App;
