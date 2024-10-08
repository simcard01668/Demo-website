import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Navbar from './Navbar'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 768px) {
    height: 200vh;
}

`

const Container = styled.div`
height: 100%;
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
scroll-snap-align: center;

@media only screen and (max-width: 768px) {
  width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
flex: 2;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 768px) {
  align-items: center;
flex: 1; }
`

const Title = styled.h1`font-size: 74px;
@media only screen and (max-width: 768px) {
text-align: center;}`

const WhatweDo = styled.h3`
display: flex;
align-items: center;
gap: 10px;`

const Line = styled.img`
height: 5px;`

const SubTitle = styled.h2`
color: #da4ea2;`

const Description = styled.p`
font-size: 24px;
color: lightgray;

@media only screen and (max-width: 768px) {
padding: 20px;
text-align: center;}`

const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;`



const Right = styled.div`
flex: 3;
height: 100%;
justify-content: center;
align-items: center;
position: relative;

@media only screen and (max-width: 768px) {
  width: 100%;
flex: 1; }

`
const Img = styled.img`
width: 800px;
object-fit: contain;
height: 600px;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px) {
width: 300px;
height: 300px;}

@keyframes animate {
to{
  transform: translateY(20px);
}
}
`

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatweDo>
            <Line src='./img/line.png' />
            <SubTitle>What we Do</SubTitle>
          </WhatweDo>
          <Description>we enjoy creating delightful, human-centered digital experiences.</Description>
          <Button>Get Started</Button>

        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }} >
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={0.8}>
              <MeshDistortMaterial
                color="#a07dbb" attach="material" distort={0.5} speed={2}
              />
            </Sphere>

          </Canvas>
          <Img src='./img/moon.png' />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero