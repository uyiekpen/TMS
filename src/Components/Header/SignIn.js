import React from 'react'
import styled from 'styled-components'
import pix from "../Image/git.png"
import pix1 from "../Image/google.png"
import pix2 from "../Image/fine.png"
import pix3 from "../Image/Q.png"
import Checkbox from '@mui/material/Checkbox';
import {Link as LinkR} from "react-router-dom"


const SignIn = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Container>
      <Wrapper>
        <TextHolder>
          <Welcome>Welcome Back!</Welcome>
          <ButtonHolder>
          <CardButton>
            
          <ButtonGoogle>
          <Div>
          <ImgHolder1>
          <Img src={pix1}/>

          </ImgHolder1>
          
           
            <div>Sign Up with Google</div>
           </Div>
           </ButtonGoogle>
        </CardButton>
        <CardButton>
          
          <ButtonGithub>
            <Div>
            <ImgHolder>
            <Img src={pix}/>

            </ImgHolder>
            <div>Sign Up with Github</div>
            </Div>
          </ButtonGithub>
        </CardButton>
            
          </ButtonHolder>
          <Next>
            <Line></Line>
            <Text>OR</Text>
            <Line1></Line1>

          </Next>
          <InputHolder>
            <Card>
              <Form>
                <Label>Email Address</Label>
                <Input/>
                <Label>Password</Label>
                <Input/>
                
              </Form>

              <Another>
                <AnotherHolder>
                  <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Remember>Remember me</Remember>
                </AnotherHolder>
              </Another>
              <SubmitButton>
                <Button2>Sign In</Button2>
              </SubmitButton>
              <Title>
               Don't have an Account? <Span to="/Register">Create an account</Span>
                </Title>
            </Card>
          </InputHolder>

        </TextHolder>
        <ImageHolder>
          <Image>
            <BgImage src={pix2}/>
            <Card2><h4>Ready to take a step getting
            closer to your  dream job???</h4></Card2>
            <Card3><h4>We’ve got a lot prepared just
            for you!!</h4></Card3>
          </Image>
          <ImgB>
            <ImageL src={pix3}/>
          </ImgB>
        </ImageHolder>
      </Wrapper>
    </Container>
  )
}

const ImageL = styled.img`
height:50px;
width:50px;
object-fit:contain ;
`


const ImgB = styled.div`
height:50px;
width:50px;
border-radius:100%;
position:absolute ;
bottom:20px ;
right:220px ;

`

const Card3 = styled.div`
height:100px;
width:200px;
position:absolute ;
background-color:white;
border-radius:10px;
align-items:center;
bottom:140px ;
left:250px ;

box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
align-items:center;
justify-content:center;
h4{
  font-size: 13px;
  text-align:center ;
  font-weight:bold ;


}

`


const Card2 = styled.div`
height:100px;
width:200px ;
position:absolute ;
background-color:white;
border-radius:10px;
top: 23px;
left:-35px;
display: flex;
align-items:center;
justify-content:center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
h4{
  font-size: 13px;
  text-align:center ;
  font-weight:bold ;

}

`

const Image= styled.div`
height: 500px;
width: 400px;
border-radius: 12px;
position: relative;
`


const ImgHolder1= styled.div`
height: 35px;
width:35px ;
border-radius:100%;
background-color:  #2976FC;
display:flex ;
justify-content:center ;
align-items:center ;

`

const ImgHolder= styled.div`
height: 35px;
width:35px ;
border-radius:100%;
background-color:white;
display:flex ;
justify-content:center ;
align-items:center ;

`
const SubmitButton = styled.div`
margin-top: 20px;
@media screen and (max-width: 760px){
}
`
const Title = styled.div`
  font-size: 13px;
  margin-top: 20px;
  font-weight: bold;
  display: flex;
  width: 400px;
  justify-content:space-between;
  span {
    font-weight: bold;
    color: red;
    cursor: pointer;
  }
  @media screen and (max-width: 760px){
  }
  font-size: 13px;
  font-weight: bold;
`;

const Span = styled(LinkR)`
  font-weight: bold;
  color:#FE8B3F;
  cursor: pointer;
  margin-left: 5px;
  text-decoration: none;
`;

const Button2 = styled.button`
height: 45px;
width: 400px;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background-color: #0950CD;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  
`

const AnotherHolder= styled.div`
width: 400px;
display:flex ;
height:30px ;
justify-content: space-between;
align-items:center;

`
const Remember= styled.div`
color:#FE8B3F;
text-decoration:underline;
`

const Another= styled.div`
display:flex ;
`


const Input= styled.input`
width: 400px;
height: 50px;
margin-top: 5px;
  border-radius:5px;
  outline: none;
  border: 2px solid lightgray;
  padding-left: 10px;
  background:whitesmoke ;
  margin-bottom: 10px;
  font-family: Poppins;
  ::placeholder {
    font-family: Poppins;
    color: gray;
  }


`
const Label= styled.div``
const Form = styled.form`
height: 150px;
display: flex;
flex-direction:column;
`
const Card= styled.div`
height: 300px;
`

const InputHolder= styled.div`
margin-top: 10px;
`


const Line1= styled.hr`
width:150px ;
height: 0px;

`
const Text= styled.div`
font-weight: bold;
`
const Line= styled.hr`
width:150px ;
height: 0px;


`
const Next= styled.div`
margin-top:10px ;
width:400px ;
display:flex ;
height: 25px;
align-items:flex-end ;
`



const BgImage= styled.img`
height: 500px;
width: 400px;
object-fit: contain;
position:absolute;
`



const Div = styled.div`
display:flex ;
width: 220px;
justify-content:center ;
align-items:center ;
justify-content:space-evenly ;
`

const Img = styled.img`
height: 20px;
width: 20px;
object-fit:cover ;
`

const Holder = styled.div`
height:140px;
display:flex;
flex-direction:column ;
justify-content:space-between ;
`

const CardButton = styled.div`


`

const ButtonGoogle = styled.div`
height: 50px;
width: 400px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background-color: #0950CD;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`
const ButtonGithub = styled.div`
height: 50px;
width: 400px;
display:flex ;
justify-content:center ;
align-items:center ;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background-color:  #2976FC;
text-decoration: none;
color:white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }

`

const ButtonHolder = styled.div`
margin-top:20px ;
height:120px ;
display:flex ;
flex-direction: column;
justify-content:space-between ;
`

const Welcome = styled.div`
font-size:20px ;
font-weight:bold ;
`


const ImageHolder = styled.div`
display:flex;
justify-content:center ;
height:600px;
width:50% ;
`
const TextHolder = styled.div`
height:600px;
width:50% ;

`
const Wrapper = styled.div`
height:100% ;
width:80% ;
display:flex ;
`

const Container = styled.div`
height:100% ;
width:100% ;
margin-top:100px ;
display:flex ;
justify-content:center ;
align-items:center;
`
export default SignIn
