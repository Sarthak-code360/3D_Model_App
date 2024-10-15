import { Text, View } from "react-native";
import { Canvas, useFrame } from '@react-three/fiber/native';
import { useState, useRef, Suspense } from "react";
import React from "react";
import Model from "@/src/components/Model";
import useControl from 'r3f-native-orbitcontrols';
import { OrbitControls } from "@react-three/drei/core";

function Box(props) {

  const [OrbitControls, events] = useControls();

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
      {/* Example 3D inbuild model use */}
      {/* <ambientLight /> */}
      {/* <pointLight position={[10, 10, 10]} /> */}

      {/* <Box />
      <Box position={[0, 2, 0]} />
      <Box position={[0, -2, 0]} /> */}

      {/* External 3D model  */}
      <OrbitControls enablePan={false} />
      <directionalLight position={[1, 0, 0]} args={['white', 5]} />
      <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
      <directionalLight position={[0, 1, 0]} args={['white', 5]} />
      <directionalLight position={[0, -1, 0]} args={['white', 5]} />
      <directionalLight position={[0, 0, 1]} args={['white', 5]} />
      <directionalLight position={[0, 0, -1]} args={['white', 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>

    </Canvas>
  );
}
