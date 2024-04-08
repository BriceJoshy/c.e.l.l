import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const EarthCanvas = () => {
  const gltf = useLoader(GLTFLoader, "/planet3js/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
        autoRotateSpeed={0.7}
      />
      <ambientLight intensity={0.1} />
      <primitive object={gltf.scene} scale={2.5} />;
    </Canvas>
  );
};

export default EarthCanvas;
