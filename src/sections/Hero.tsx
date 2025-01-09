import { Canvas } from "@react-three/fiber";
import {Center, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
/*import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";*/
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Desktop from "../components/Desktop.jsx";
import { Leva, useControls } from "leva"; // Import Leva

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Leva controls for position, scale, and rotation
 /* const { positionX, positionY, positionZ, scale, rotationY } = useControls({
    positionX: { value: sizes.deskPosition[0], min: -20, max: 20, step: 0.5 },
    positionY: { value: sizes.deskPosition[1], min: -20, max: 20, step: 0.5 },
    positionZ: { value: sizes.deskPosition[2], min: -20, max: 20, step: 0.5 },
    scale: { value: sizes.deskScale * 20, min: 1, max: 50, step: 1 },
    rotationY: { value: -Math.PI, min: -Math.PI, max: Math.PI, step: 0.1 }
  });*/

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl font-medium text-white text-center font-generalsans">
          Welcome, I'm Dionis <span className="waving-hand">✋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Let's Work Together
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
         {/*<Leva />*/}
        {/*<Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>*/}
        {/*<Canvas className="w-full">
          <ambientLight intensity={Math.PI}/>
          <directionalLight position={[10, 10, 5]}/>
          <Center>
            <Suspense fallback={<CanvasLoader/>}>
              <group scale={0.5} position={[0, -2, 0]} rotation={[0, -0.1, 0]}>
                <Desktop/>
              </group>
            </Suspense>
          </Center>
          <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
        </Canvas>*/}

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
