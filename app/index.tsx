import { Text, View } from "react-native";
import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useRef } from "react";

function Box(props) {
  const [active, setActive] = useState(false);
  const mesh = useRef();

  useFrame((state, delta) => {
    if (active) { // Check if mesh.current is defined
      mesh.current.rotation.y += delta;
      mesh.current.rotation.x += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
    >
      <boxGeometry />
      <meshStandardMaterial color={active ? '#ff7f50' : '#D3D3D3'} />
    </mesh>
  );
}

export default function Index() {
  return (
    <Canvas>
      {/* Light on model from all the direction - do not produce shadow */}
      <ambientLight />
      {/* <pointLight position={[10, 10, 10]} /> */}

      <Box />
      <Box position={[0, 2, 0]} />
      <Box position={[0, -2, 0]} />

    </Canvas>
  );
}
