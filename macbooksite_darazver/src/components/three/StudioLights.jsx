import React from 'react'
import { Environment, Lightformer } from '@react-three/drei'

const StudioLights = () => {
  return (
    <group name="studio-lights">
      {/* Environment / side neon panels (keep) */}
      <Environment resolution={256} background={false}>
        {/* central ring */}
        <Lightformer
          form="ring"
          intensity={3}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 6, 1]}
        />

        {/* TOP-BEHIND: two white panels above and slightly behind the model to create a strong back/top fill */}
        <Lightformer
          form="rect"
          intensity={3.5}
          rotation-x={Math.PI / 2}
          position={[0, 6, -8]}
          scale={[6, 2.2, 1]}
          color="#ffffff"
        />

        {/* BOTTOM-FRONT: white panel low and in front to illuminate the lower bezel / keyboard edge */}
        <Lightformer
          form="rect"
          intensity={2.8}
          rotation-x={-Math.PI / 2}
          position={[0, -2.2, 4]}
          scale={[6, 1.6, 1]}
          color="#ffffff"
        />

        {/* LEFT - neon blue / purple panels */}
        <Lightformer
          form="rect"
          intensity={2.6}
          rotation-y={Math.PI / 2}
          position={[-5.5, 2, 0]}
          scale={[3.6, 2.2, 1]}
          color="#00f0ff"  // neon blue
        />
        <Lightformer
          form="rect"
          intensity={1.9}
          rotation-y={Math.PI / 2}
          position={[-7, 1.6, 0]}
          scale={[2.4, 1.6, 1]}
          color="#8b5cf6"  // purple accent
        />

        {/* RIGHT - neon orange / red / yellow panels */}
        <Lightformer
          form="rect"
          intensity={2.8}
          rotation-y={-Math.PI / 2}
          position={[5.5, 2, 0]}
          scale={[3.6, 2.2, 1]}
          color="#ff6a00"  // neon orange
        />
        <Lightformer
          form="rect"
          intensity={1.8}
          rotation-y={-Math.PI / 2}
          position={[7, 1.6, 0]}
          scale={[2.4, 1.6, 1]}
          color="#ffd166"  // warm yellow highlight
        />

        {/* narrow bright strip directly behind screen to accent edges */}
        <Lightformer
          form="rect"
          intensity={4.5}
          rotation-x={0}
          position={[0, 1.8, -6.8]}
          scale={[6.5, 3.8, 1]}
          color="#ffffff"
        />
      </Environment>

      {/* Top key lights (reduced) */}
      <spotLight
        position={[-5, 8, 5]}
        intensity={0.7}
        angle={0.28}
        penumbra={0.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color={'#ffffff'}
      />
      <spotLight
        position={[5, 8, 5]}
        intensity={0.6}
        angle={0.28}
        penumbra={0.35}
        castShadow
        color={'#ffd166'}
      />

      {/* Bottom fill */}
      <spotLight
        position={[0, -4, 4]}
        intensity={0.55}
        angle={0.6}
        penumbra={0.8}
        color={'#ffd8b5'}
      />

      {/* Strong, narrow back rim lights (left & right) to sculpt edges */}
      <spotLight
        name="back-rim-left"
        position={[-3.2, 1.8, -7.5]}
        intensity={1.6}
        angle={0.18}          // narrow cone for sharp rim
        penumbra={0.2}
        color={'#a8f0ff'}     // cool rim
        castShadow={false}
      />
      <spotLight
        name="back-rim-right"
        position={[3.2, 1.8, -7.5]}
        intensity={1.6}
        angle={0.18}
        penumbra={0.2}
        color={'#ffb3a1'}     // warm rim
        castShadow={false}
      />

      {/* small point lights near the left/right top edges to highlight corners */}
      <pointLight position={[-2.4, 2.3, -6.2]} intensity={0.45} distance={3} decay={0} color={'#a8f0ff'} />
      <pointLight position={[2.4, 2.3, -6.2]} intensity={0.45} distance={3} decay={0} color={'#ffb3a1'} />

      {/* FRONT / VIEWER light - illuminates the model's front face from the camera/viewer side */}
      <pointLight
        name="viewer-front"
        position={[0, 2, 6]}     // match your camera/viewer position
        intensity={0.9}         // adjust to taste (0.6-1.2 typical)
        distance={20}
        decay={2}
        color={'#ffffff'}
        castShadow={false}
      />

      {/* reduce ambient so rim contrast reads stronger */}
      <ambientLight intensity={0.04} />
    </group>
  )
}

export default StudioLights
