import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Chair from './Chair'
import styled from 'styled-components'

const Description = styled.p`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top:100px;
  right: 100px;
  color: black;
`

const WebDesign = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
      <Chair />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Description>
      We design products with a strong focus on both world class design and ensuring your product is a market success.
    </Description>
    </>
  )
}

export default WebDesign