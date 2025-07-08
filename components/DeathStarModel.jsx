
import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function DeathStarModel() {
  const gltf = useLoader(GLTFLoader, "/models/deathstar2.glb");
  return <primitive object={gltf.scene} scale={0.05} />;
}
