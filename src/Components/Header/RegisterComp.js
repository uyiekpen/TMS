import React from 'react';
import styled from 'styled-components';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Header from './Header';
import pix from "../Image/git.png"
import pix1 from "../Image/google.png"





const theme = createTheme({
    typography: {
      fontFamily: [
        "Poppins"
      ].join(','),
    },
  });

const RegisterComp = () => {

    const Schema = yup.object().shape({
      name : yup.string().email().required("Please fill up this filed"),
        email : yup.string().email().required("Please fill up this filed"),
        password : yup.string().required("Please fill up this filed")
    })

    const {
        register,
        formState:{errors},
        reset,
    } = useForm({
        resolver : yupResolver(Schema)
    })

  return (
    <Component>
            <Header/>
        <Wrapper>
            <Card>
                <Text>Join TalsGrow</Text>
               
                <Form theme={theme}>
                <span>FullName</span>

                <Label>{errors.name?.message}</Label>
                <Input placeholder='Enter your Name' {...register("name")}/>
                    <span>Email Address</span>
                    <Label>{errors.email?.message}</Label>
                    <Input placeholder='Enter your Email' {...register("email")}/>
                    <span>Create password</span>
                    <Label>{errors.password?.message}</Label>
                    <Input placeholder='Enter Password'  {...register("password")}/>


                    <SubmitButton>
                        <Button2>Sign Up</Button2>
                    </SubmitButton>
                    <Title>
                        Already have an Account, <Span to="/SignIn">Sign In</Span>
                    </Title>
                </Form>

            </Card>
            <Card1>
            <Holder>
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
            </Holder>

            </Card1>
          
        </Wrapper>
    </Component>
  )
};

export default RegisterComp;

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
width: 300px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background-color: white;
text-decoration: none;
color: #0950CD;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`
const ButtonGithub = styled.div`
height: 50px;
width: 300px;
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


const Span = styled(Link)`
  font-weight: bold;
  color: red;
  cursor: pointer;
  margin-left: 5px;
  text-decoration: none;
`;

const Title = styled.div`
  font-size: 13px;
  margin-top: 20px;
  font-weight: bold;
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

const FormGroup2 = styled(FormGroup)`
height: 50px;
display: flex;
justify-content: flex-end;
width: 300px;
font-family: Poppins;
font-weight: bold;

`
const Label = styled.label`

`

const Button2 = styled.button`
height: 45px;
width: 450px;
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

const SubmitButton = styled.div`
margin-top: 20px;
@media screen and (max-width: 760px){
}
`


const Input = styled.input`
height: 40px;
width: 450px;
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

const Form = styled.form`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
width:80% ;
  margin: 0 10px;
  padding-top: 30px;
 
`


const Text = styled.div`
text-transform: capitalize;
margin-top: 20px;
text-align: ;
width:80% ;
font-weight: bold;
@media screen and (max-width: 760px){
  text-transform: capitalize;
margin-top: 60px;
font-weight: bold;  
}
`

const Card = styled.div`
height: 500px;
width: 50%;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
span{
  width:450px ;
  font-weight:bold ;

}

`
const Card1 = styled.div`
height: 500px;
width: 50%;
background-color: #0950CD;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`



const Wrapper = styled.div`
margin-top: 30px;
width: 80%;
height: 100%;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
display: flex;


`


const Component = styled.div`
margin-top: 70px;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
display: flex;
align-items: center;
font-family: Poppins;
min-height: calc(100vh - 100px);

@media screen and (max-width: 760px){
    margin-top: 70px;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
display: flex;
align-items: center;
font-family: Poppins;  
}
`