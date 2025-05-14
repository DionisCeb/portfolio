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

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
        <Hero />
        <About />
        <SkillsSection />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
        <ScrollProgressCircle />

    </main>
  )
}

export default App
