import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacbookModel14 from '../models/Macbook-14'
import MacbookModel16 from '../models/Macbook-16'

const ModelSwitcher = ({ color, scale, isMobile }) => {
    const smallmacbook = useRef()  // Reference to small Macbook model
    const largemacbook = useRef()  // Reference to large Macbook model

    const showlargeModel = scale === 0.08 | scale === 0.05;

    const controlsConfig = {
        snap : true,
        speed: 0.8,
        zoom: 1,
        polar: [-Math.PI , Math.PI ],
        azimuth: [-Math.PI / 1.5, Math.PI / 1.5],
    }
    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref = {smallmacbook} visible = {!showlargeModel}>
                    <MacbookModel14 scale={Math.max(scale * 0.5, isMobile ? 0.12 : 0.15)} position={[0, 0, 0]} />
                </group>
            </PresentationControls>

            <PresentationControls>
                <group ref = {largemacbook} visible = {showlargeModel}>
                    <MacbookModel16 scale={Math.max(scale * 0.5, isMobile ? 0.15 : 0.18)} position={[0, 0, 0]} />
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher
