import styled from 'styled-components'

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
          {/* 3D model */}

        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatweDo>
            <Line src='./img/line.png'/>
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