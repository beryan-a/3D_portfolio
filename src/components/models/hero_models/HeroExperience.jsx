import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import React from 'react'
import Particles from './Particles'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }); // Adjust the breakpoint as needed
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <Canvas
            style={{ width: "100%", height: "100%" }}
            gl={{ antialias: true, alpha: true }}
            camera={{ position: [0, 0, 15], fov: 45 }}
        >

            <OrbitControls  //movements restrictions
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <HeroLights />
            <Particles count={400} /> {/* Add the Particles component here and set count*/}

            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, -3.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Room />
            </group>
        </Canvas>
    )
}

export default HeroExperience