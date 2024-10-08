/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 chair.gltf --transform 
Files: chair.gltf [46.42MB] > C:\Users\sim\Desktop\temp\chair-transformed.glb [1.66MB] (96%)
Author: Red Fox / nokillnando (https://sketchfab.com/nokillnando)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/office-chair-b228a29fa84544c2be501c295653ffe7
Title: Office Chair
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chair-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.OfficeChair_OfficeChairMetal_0.geometry} material={materials.OfficeChairMetal} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.OfficeChair_OfficeChairPlastic_0.geometry} material={materials.OfficeChairPlastic} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.OfficeChair_OfficeChairCloth_0.geometry} material={materials.OfficeChairCloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.OfficeChair_OfficeChairLeather_0.geometry} material={materials.OfficeChairLeather} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/chair-transformed.glb')
