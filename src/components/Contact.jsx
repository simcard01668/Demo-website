import { useRef, useState } from 'react'
import Map from './Map'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

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

@media only screen and (max-width: 768px) {
  justify-content: center;
}
`
const Form = styled.form`
display: flex;
flex-direction: column;
width: 500px;
gap: 25px;

@media only screen and (max-width: 768px) {
  width: 300px;
}
`

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

@media only screen and (max-width: 768px) {
display: none;
}
`

const Contact = () => {

  const form = useRef()
const [success, setSuccess] = useState(false)

function handleSubmit(e){
e.preventDefault()
 emailjs.sendForm('service_vz2k5a8', 'template_3y7w85j', form.current, 'mu3fT6u-fwzhbqiJA')
  .then((result) => {
      console.log(result.text);
      setSuccess(true)
  }, (error) => {
      console.log(error.text);
      setSuccess(false)
  });
}

  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit} ref={form}>
            <Title>Contact Us</Title>
            <Input type="text" placeholder="Name"  name="name"/>
            <Input type="text" placeholder="Email" name="email"/>
            <Textarea placeholder="Write your Message" rows={10} name="message"></Textarea>
            <Button type="submit">Send</Button>
            {success && <p>Message sent successfully</p> }
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact

//service_vz2k5a8
//mu3fT6u-fwzhbqiJA
//n9fQEmAVpdSYOSrpf-fVL
// template_3y7w85j