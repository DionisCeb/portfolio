import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
    const group = useRef();

    /* useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

        if (!isMobile) {
            easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
        }
    }); */

    useFrame((state, delta) => {
        // Use a farther Z-position for mobile
        const cameraZ = isMobile ? 30 : 25;
        easing.damp3(state.camera.position, [0, 0, cameraZ], 0.25, delta);

        // Apply model rotation for both mobile and desktop
        if (group.current) {
            easing.dampE(
                group.current.rotation,
                [-state.pointer.y / 3, state.pointer.x / 5, 0],
                0.25,
                delta
            );
        }
    });

    return <group ref={group} scale={isMobile ? 0.8 : 1.3}>{children}</group>;
};

export default HeroCamera;