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
        password : yup.string().required("Please fill up this filed"),
        confirm:yup.string().oneOf([yup.ref("password"),null])
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
                <Text>Register Your Accout</Text>
               
                <Form theme={theme}>

                <Label>{errors.name?.message}</Label>
                <Input placeholder='Enter your Name' {...register("name")}/>
                  
                    <Label>{errors.email?.message}</Label>
                    <Input placeholder='Enter your Email' {...register("email")}/>

                    <Label>{errors.password?.message}</Label>
                    <Input placeholder='Enter Password' {...register("password")}/>

                    <Label>{errors.confirm?.message}</Label>
                    <Input placeholder='Confirm Password' {...register("confirm")}/>

                    <SubmitButton>
                        <Button2>Submit</Button2>
                    </SubmitButton>
                    <Title>
                        Already have an Account, <Span to="/SignIn">Sign In</Span>
                    </Title>
                </Form>

            </Card>
        </Wrapper>
    </Component>
  )
};

export default RegisterComp;


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
@media screen and (max-width: 760px){
    height: 30px;
display: flex;
justify-content: flex-end;
width: 250px;
font-family: Poppins;
font-weight: bold;
}
`
const Label = styled.label``

const Button2 = styled.button`
height: 45px;
width: 150px;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background: #123456;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  @media screen and (max-width: 760px){
    height: 45px;
width: 150px;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background: #123456;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  } 
  }
`

const SubmitButton = styled.div`
margin-top: 20px;
@media screen and (max-width: 760px){
}
`


const Input = styled.input`
height: 50px;
width: 300px;
margin-top: 20px;
  border-radius: 3px;
  outline: none;
  border: 1px solid lightgray;
  padding-left: 10px;
  margin-bottom: 10px;
  font-family: Poppins;
  ::placeholder {
    font-family: Poppins;
    color: gray;
  }
  @media screen and (max-width: 760px){
    height: 30px;
width: 250px;
margin-top: 20px;
  border-radius: 3px;
  outline: none;
  border: 1px solid lightgray;
  padding-left: 10px;
  margin-bottom: 10px;
  font-family: Poppins;
}
`

const Form = styled.form`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
  margin: 0 20px;
  padding-top: 50px;
  @media screen and (max-width: 760px){
    display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
  margin: 0 20px;
  padding-top: 50px; 
}
`


const Text = styled.div`
text-transform: capitalize;
margin-top: 20px;
font-weight: bold;
@media screen and (max-width: 760px){
  text-transform: capitalize;
margin-top: 60px;
font-weight: bold;  
}
`

const Card = styled.div`
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
height: 600px;
width: 500px;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
@media screen and (max-width: 760px){
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
height: 500px;
width: 300px;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column; 
}
`
const Wrapper = styled.div`
margin-top: 30px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items:center;
@media screen and (max-width: 760px){
margin-top: 30px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items:center;  
}
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