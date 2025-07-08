
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import DeathStarModel from "../components/DeathStarModel";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <DeathStarModel />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </main>
  );
}
