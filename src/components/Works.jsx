import styled from 'styled-components'
import './works.css'

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
`

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
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
  position: relative;
`



const Right = styled.div`
flex: 1;`


const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => {
              return (
                <ListItem key={item}>{item}</ListItem>
              )
            })}
          </List>
        </Left>

        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Works
