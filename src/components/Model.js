import React, { useRef, useEffect } from "react";
import {
  MeshTransmissionMaterial,
  useGLTF,
  Text,
  CubeCamera,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function Model({ containerWidth }) {
  const { nodes } = useGLTF("/medias/imagin4.glb");
  const torus = useRef(null);
  const { viewport } = useThree();

  // Use a base width (design reference)
  const baseWidth = 200;
  const minScaleFactor = 2.8; // adjust as needed
  const maxScaleFactor = 5.5; // adjust as needed
  const scaleFactor = containerWidth
    ? Math.min(
        Math.max(containerWidth / baseWidth, minScaleFactor),
        maxScaleFactor
      )
    : minScaleFactor;

  // Compute the top edge of the viewport in world units
  const topEdge = viewport.height / 2;
  const verticalOffset = 3;

  // Conditional text scale for "Full Stack Developer"
  const developerTextScale =
    containerWidth && containerWidth < 800
      ? [0.28, 0.28, 0.28]
      : [0.08, 0.08, 0.08];
  const developerTextPos =
    containerWidth && containerWidth < 800 ? [0, 0.7, 0] : [0, 0.2, 0];

  // Use GSAP to continuously rotate the object
  useEffect(() => {
    if (torus.current) {
      gsap.to(torus.current.rotation, {
        y: torus.current.rotation.y + Math.PI * 2,
        duration: 10, // adjust duration as needed
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  const materialProps = {
    color: "#ffffff",
    thickness: 0.2,
    envMapIntensity: 0,
    opacity: 1,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0,
    backside: true,
    transparent: true,
    depthWrite: true,
  };

  return (
    <group position={[0, 0, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <Text
        position={developerTextPos}
        renderOrder={0}
        fontSize={0.5}
        color="#ABABB0"
        anchorX="center"
        anchorY="middle"
        scale={developerTextScale}
        fontStyle={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontWeight: 400,
        }}
      >
        Full Stack Developer
      </Text>
      <Text
        position={[0, 0, 0]}
        renderOrder={0}
        fontSize={0.5}
        color="#444"
        anchorX="center"
        anchorY="middle"
        scale={[0.45, 0.45, 0.45]}
        fontStyle={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontWeight: 400,
        }}
      >
        Ahmad Albow
      </Text>

      <CubeCamera resolution={64} frames={Infinity}>
        {(texture) => (
          <mesh
            ref={torus}
            {...nodes.Sphere}
            scale={[0.37, 0.37, 0.37]}
            renderOrder={0}
            color="white"
          >
            <MeshTransmissionMaterial {...materialProps} />
          </mesh>
        )}
      </CubeCamera>
    </group>
  );
}
