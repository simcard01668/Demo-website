import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
    const textRef = useRef()
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.getElapsedTime())*1))
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial color="hotpink">
                <RenderTexture attach="map">
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 5]}
                    />
                    <color attach="background" args={['pink']} />
                    <Text ref={textRef} fontSize={0.5} color="#555">
                        hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube