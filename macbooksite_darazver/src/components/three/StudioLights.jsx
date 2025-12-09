import {Environment, Lightformer} from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[-10, 5, -5]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[10, 0, 1]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <spotLight
                position={[-2, 10, 5]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />
            <spotLight
                position={[0, -25, 10]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />
            <spotLight
                position={[0, 15, 5]}
                angle={0.15}
                decay={0.1}
                intensity={Math.PI * 1}
            />

            {/* Side rim lights to highlight left/right edges */}
            <spotLight
                name="edge-left"
                position={[-4.2, 1.8, 4]}    // left side, slightly forward
                intensity={0.9}
                angle={0.18}               // narrow cone for a crisp edge
                penumbra={0.25}
                color={'#ffffff'}
                distance={12}
                decay={2}
                castShadow={false}
            />
            <spotLight
                name="edge-right"
                position={[4.2, 1.8, 4]}     // right side, mirrored
                intensity={0.9}
                angle={0.18}
                penumbra={0.25}
                color={'#ffffff'}
                distance={12}
                decay={2}
                castShadow={false}
            />
        </group>
    )
}
export default StudioLights