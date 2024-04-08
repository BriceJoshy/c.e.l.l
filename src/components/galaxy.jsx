import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const GalaxyCanvas = () => {
  const gltf = useLoader(GLTFLoader, "/galaxy3js/scene.gltf");

  return (
    <Canvas frameloop="demand">
      <OrbitControls
        autoRotate={true}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
        autoRotateSpeed={0.7}
      />
      <ambientLight intensity={0} />
      <primitive object={gltf.scene} scale={2.5} />;
    </Canvas>
  );
};

export default GalaxyCanvas;
