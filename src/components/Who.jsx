import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`

const Container = styled.div`
height: 100vh;
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
scroll-snap-align: center;
`

const Left = styled.div`
flex: 1;
display: flex;
height: 100vh;
width: 80%;
`

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`
const Title = styled.h1`font-size: 74px;`

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
color: lightgray;`

const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 150px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;`

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position: [5,5,5]}} >
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} intensity={1} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatweDo>
            <Line src='./img/line.png' />
            <SubTitle>Who we Are</SubTitle>
          </WhatweDo>
          <Description>a creative group of designers and developers with a passion for the arts.</Description>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who