import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import React from 'react'

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'}); // Adjust the breakpoint as needed
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={3} />

            <OrbitControls  //movements restrictions
                enablePan={false} 
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />


            <group ></group>

            <Room />
        </Canvas>
    )
}

export default HeroExperience