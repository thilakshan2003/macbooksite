import { useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import gsap from 'gsap';

import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import {useGSAP} from "@gsap/react";
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 10;

const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

// immediate (no animation) version used on initial mount
const setMeshesOpacityImmediate = (group, opacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = opacity;
        }
    })
}

const moveGroup = (group, x) => {
    if(!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();
    const initializedRef = useRef(false); // track initial mount

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(() => {
        // On first render: set positions/opacities immediately (no animation)
        if (!initializedRef.current) {
            if (showLargeMacbook) {
                if (smallMacbookRef.current) smallMacbookRef.current.position.x = -OFFSET_DISTANCE;
                if (largeMacbookRef.current) largeMacbookRef.current.position.x = 0;

                setMeshesOpacityImmediate(smallMacbookRef.current, 0);
                setMeshesOpacityImmediate(largeMacbookRef.current, 1);
            } else {
                if (smallMacbookRef.current) smallMacbookRef.current.position.x = 0;
                if (largeMacbookRef.current) largeMacbookRef.current.position.x = OFFSET_DISTANCE;

                setMeshesOpacityImmediate(smallMacbookRef.current, 1);
                setMeshesOpacityImmediate(largeMacbookRef.current, 0);
            }

            initializedRef.current = true;
            return;
        }

        // Subsequent changes: animate with GSAP as before
        if(showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMacbookRef.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacbookRef.current, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass:1, tension: 0, friction: 26}
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                     <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
             </PresentationControls>
         </>
     )
 }
 export default ModelSwitcher