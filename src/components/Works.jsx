import styled from 'styled-components'
import { useState } from 'react'
import Development from './Development'
import ProductDesign from './ProductDesign'
import WebDesign from './WebDesign'
import './works.css'
import Illustration from './Illustration'
import SocialMedia from './SocialMedia'

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]
const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
position: relative;
color: black;
font-size: 14px;
font-weight: 300;
`

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
}
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;

@media only screen and (max-width: 768px) {
  padding: 20px;
  justify-content: center;
}
`

const List = styled.ul`
flex-direction: column;
display: flex;
gap: 20px;
list-style: none;
`

const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  
  user-select: none;

  ::after{
    content: 'hi';
    
  }

  @media only screen and (max-width: 768px) {
font-size: 24px;
color: white;
-webkit-text-stroke: 0px;
}

`


const Right = styled.div`
flex: 1;`


const Works = () => {
  const [work, setWork] = useState('Web Design')
  return (
    <Section>
      <Container>
        <Left>                                                                                             
          <List>
            {data.map((item) => {
              return (
                <ListItem key={item} onClick={()=> setWork(item)}>{item}</ListItem>
              )
            })}
          </List>
        </Left>

        <Right>
          {work === "Web Design" ? (<WebDesign />) : work === "Development" ? (<Development />) : work === "Illustration" ? (<Illustration/>) : work === "Social Media" ? (<SocialMedia/>) : (<ProductDesign />)}
        </Right>
      </Container>
    </Section>
  )
}

export default Works
