import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Desktop from "./components/Desktop.jsx";
import DesktopSection from "./sections/DesktopSection.jsx";
import Certifications from "./sections/Certifications.jsx";
import SkillsSection from "./sections/Skills.tsx";
import ScrollProgressCircle from "../public/hooks/ScrollProgressCircle.tsx";
import WebcraftPromo from "./sections/WebCraftPromo.jsx";
import AISolutionsPromo from "./sections/AISolutionsPromo.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // If you’re using HashRouter, ignore hashes that are actually routes like "#/about"
    if (hash.startsWith("#/")) return;

    const id = decodeURIComponent(hash.slice(1));

    // Wait a tick so children are mounted before scrolling
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [hash]);

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
        <Hero />
        <About />
        <SkillsSection />
        <AISolutionsPromo />
        <Certifications />
        <Projects />
        <WebcraftPromo />
        <Contact />
        <Footer />
        {/* <ScrollProgressCircle /> */}

    </main>
  )
}

export default App
