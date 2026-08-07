import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import React, { Suspense } from 'react' // Suspense eklendi
import Particles from './Particles'
import Budgie from './Budgie'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <Canvas
            style={{ width: "100%", height: "100%" }}
            gl={{ antialias: true, alpha: true }}
            camera={{ position: [0, 0, 15], fov: 45 }}
        >
            <OrbitControls  
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <HeroLights />
            <Particles count={400} />

            {/* Suspense ile tüm 3D modelleri sarıyoruz */}
            <Suspense fallback={null}>
                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                    
                    {/* Kuş modelini Oda grubunun içine yerleştirmek oda dönünce kuşun da beraber dönmesini sağlar */}
                    <Budgie 
                        position={[-1.8, 1.7, -1.4]} // [X (Sol/Sağ), Y (Yukarı/Aşağı), Z (İleri/Geri)]
                        scale={[0.03, 0.03, 0.03]}   // Model küçükse ölçeği biraz büyütebilirsin
                        rotation={[-0.2, Math.PI / 8, 0]}
                    />
                </group>


                {/**<Suspense fallback="{...}"> kullandığınızda React'a şunu demiş olursunuz:
                 * Aşağıdaki 3D modeller indirilen kadar bekle!
                 *  İndirme bitene kadar uygulamayı çökertme, onun yerine fallback kısmına
                 *  ne koyduysam (örneğin bir yükleniyor 
                 * yazısı veya boş bir alan) onu göster.
                 *  Dosya tamamen yüklendiğinde modeli ekrana çiz." 
                 * */}


            </Suspense>




        </Canvas>
    )
}

export default HeroExperience