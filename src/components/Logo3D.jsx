"use client";

import React, { Suspense, forwardRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, useTexture, OrbitControls } from '@react-three/drei';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const TexturedCube = forwardRef((props, ref) => {
    // Load 6 different textures for the 6 faces
    const textures = useTexture([
        '/textures/face1.png',
        '/textures/face2.png',
        '/textures/face3.png',
        '/textures/face4.png',
        '/textures/face5.png',
        '/textures/face6.png',
    ]);

    // Use internal hook to animate based on the parent's ScrollTrigger
    useGSAP(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current.rotation,
            { y: 0, x: 0 },
            {
                y: Math.PI * 2,
                x: Math.PI / 3,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero-section",
                    start: "top top",
                    end: "+=70%",
                    scrub: true,
                }
            }
        );
    }, { dependencies: [ref] });

    return (
        <mesh ref={ref} {...props}>
            <boxGeometry args={[2, 2, 2]} />
            {textures.map((tex, i) => (
                <meshStandardMaterial key={i} attach={`material-${i}`} map={tex} />
            ))}
        </mesh>
    );
});

TexturedCube.displayName = 'TexturedCube';

const Logo3D = ({ cubeRef }) => {
    return (
        <div className="w-[180px] h-[180px] md:w-[190px] md:h-[190px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

                <Suspense fallback={null}>
                    <Center>
                        <TexturedCube ref={cubeRef} />
                    </Center>
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    autoRotate={false}
                />
            </Canvas>
        </div>
    );
};

export default Logo3D;
