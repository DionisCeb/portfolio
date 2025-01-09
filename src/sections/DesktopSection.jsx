import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import Desktop from "../components/Desktop.jsx";

const projectCount = myProjects.length;

const DesktopSection = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className="c-space my-20" id="work">
            <p className="head-text">My Selected Work</p>

            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">

            </div>

            <div className="mt-12 gap-5 w-full" style={{height: '50 dvh'}}>
                <Canvas>
                    <ambientLight intensity={Math.PI}/>
                    <directionalLight position={[10, 10, 5]}/>
                    <Center>
                        <Suspense fallback={<CanvasLoader/>}>
                            <group scale={0.8} position={[0, -2, 0]} rotation={[0, -0.1, 0]}>
                                <Desktop/>
                            </group>
                        </Suspense>
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                </Canvas>



            </div>
        </section>
    );
};

export default DesktopSection;