import React from 'react'
import { useMediaQuery } from 'react-responsive' // add this
import useStore from '../store'     
import clsx from 'clsx'             
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei' // npm install @react-three/drei
import MacbookModel14 from './models/Macbook-14'
import StudioLights from './three/StudioLights'
import ModelSwitcher from './three/ModelSwitcher'


const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useStore();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); //Check for mobile screen

  return (
      <section id='product-viewer' className='product-viewer-section' style={{ overflow: 'visible' }}>
      <h2>Take a closer look</h2>
      <div className='controls'>
        <p className='info'>Macbook Pro 16 in {color} </p>
        <div className='flex-center gap-5 mt-5'>
            <div className="color-control">
                <div 
                  onClick={() => setColor('#adb5bd')}
                  className={clsx(`bg-neutral-300`, color === '#adb5bd' && 'active')} 
                ></div>
                <div 
                  onClick={() => setColor('#2e2c2e')}
                  className={clsx(`bg-neutral-900`, color === '#2e2c2e' && 'active')} 
                ></div>
            </div>
            <div className='size-control'>
                <div 
                  onClick={() => setScale(0.06)}
                  className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')} 
                >
                  <p>14"</p>
                </div>
                <div 
                  onClick={() => setScale(0.08)}
                  className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')} 
                >
                  <p>16"</p>
                </div>
            </div>
        </div>
      </div>
      <p className='text-white text-4xl'>Render Canvas</p>

      <Canvas
        id='product-canvas'
        style={{ width: '100%', height: '75vh' }}
        // camera adjusted to avoid near-plane clipping and give more range
        camera={{ position: [0, 2, 6], fov: 50, near: 0.01, far: 1000 }}
      >
        <StudioLights />

        {/* Macbook Model - use store scale and amplify it so it's visible */}
        <ModelSwitcher color={color} scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
      </Canvas>
    </section>
  )
}

export default ProductViewer
