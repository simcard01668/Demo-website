
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 50px;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const Form = styled.form`
display: flex;
flex-direction: column;
width: 500px;
gap: 25px;`

const Title = styled.h1`
font-weight: 200;
`

const Input = styled.input`
padding: 20px;
background-color: #e7e4e4;
border: none;
border-radius: 5px;
`

const Textarea = styled.textarea`
padding: 20px;
background-color: #e7e4e4;
border: none;
border-radius: 5px;`

const Button = styled.button`
background-color: #da4ea2;
color: white;
outline: none;
border: none;
padding: 20px;
border-radius: 5px;
cursor: pointer;`

const Right = styled.div`
flex: 1;
`


const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Email" />
            <Textarea placeholder="Write your Message" rows={10}></Textarea>
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Contact