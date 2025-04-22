import React from "react";
import { Canvas } from "@react-three/fiber";
import {Center, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import HeroCamera from "../components/HeroCamera.jsx";
import PageLoader from "../components/PageLoader.jsx";
import Button from "../components/Button.jsx";
import {Suspense, useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Desktop from "../components/Desktop.jsx";
import {fade} from "maath/misc";
/*import { Leva, useControls } from "leva";*/ // Import Leva

const Hero = () => {
  const roles = ['Web Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Software Engineer'];
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const [currentRole, setCurrentRole] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const [showPageLoader, setShowPageLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPageLoader(false);
    }, 2000); // 3 seconds
  
    return () => clearTimeout(timer);
  }, []);
  

  //Use effect to update the current role
  useEffect(() => {
    const currentText = roles[index];

    const typingInterval = setTimeout(() => {
      if (isDeleting) {
        // Delete characters
        setCurrentRole(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(100);
      } else {
        // Add characters
        setCurrentRole(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(150);
      }

      if (!isDeleting && charIndex === currentText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 500);
      }

      if (isDeleting && charIndex === 0) {
        // Move to next role after deleting
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }, typingSpeed); // Use the typingSpeed for the timeout duration

    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, index, roles, typingSpeed]);


  return (
    <section className="min-h-screen w-full flex flex-col relative " id="home">
      {showPageLoader && <PageLoader />}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl font-medium text-white text-center font-generalsans">
          Welcome, I'm <span className="text-[#FFCA3D]">Dionis</span> <span className="waving-hand">✋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          And I'm a <span className="text-[#FFCA3D] blinking-cursor">{currentRole}</span>
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">

      {/*Canvas Desktop*/}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <Desktop
                  position={[0.8, -3.5, -0.5]} // Custom position
                  rotation={[0, -1.7, 0]}       // Custom rotation
                  scale={1}                     // Custom scale
              />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};
export default Hero;
