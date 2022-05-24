import { ARCanvas, VRCanvas } from "@react-three/xr";
import { useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

function App() {
  const gltf = useLoader(GLTFLoader, "/textNew.glb");
  return (
    <VRCanvas flat linear>
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, -10, -10]} />
      <primitive object={gltf.scene} />
    </VRCanvas>
  );
}

export default App;
