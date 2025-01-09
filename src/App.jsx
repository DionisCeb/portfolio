import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Desktop from "./components/Desktop.jsx";
import DesktopSection from "./sections/DesktopSection.jsx";

function App() {

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />

    </main>
  )
}

export default App
