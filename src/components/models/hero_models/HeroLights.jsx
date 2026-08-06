import React from 'react'
import { RectAreaLight } from 'three'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'

RectAreaLightUniformsLib.init()

const HeroLights = () => {
    return (
        <>

            <spotLight position={[2, 5, 6]} intensity={5} angle={0.15} penumbra={0.2} color="#ffffff" /> {/*front right spotlight */}

            <spotLight position={[4, 5, 4]} intensity={2} angle={0.3} penumbra={0.5} color="#4cc9f0" />

            <spotLight position={[-3, 5, 5]} intensity={3} angle={0.4} penumbra={1} color="#9d4edd" />

            <primitive
                object={new RectAreaLight("#a259ff", 2, 3, 2)}
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
                intensity={15}
            />

            <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
            <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />

            <ambientLight intensity={0.2} color="#1a1a40" />

        </>
    )
}

export default HeroLights