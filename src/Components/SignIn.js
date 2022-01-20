import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignIn = () => {

    const mySchema = yup.object().shape({
        email: yup.string().email().required("Please fill up this filed"),
        password: yup.string().required("Please fill up this filed"),
      });

      
      const {
        register,
        formState: { errors },
        // reset,
        
      } = useForm({
        resolver: yupResolver(mySchema),
      });
  return (
    <Component>
        <Wrapper>
            <Card>
                <Text>Sign in Your Account</Text>
               
                <Form>
                    
                    <Label>{errors.email?.message}</Label>
                    <Input placeholder='Enter your Email' {...register("email")}/>

                    <Label>{errors.password?.message}</Label>
                    <Input placeholder='Enter Password' {...register("password")}/>

                    <SubmitButton>
                        <Button2>Submit</Button2>
                    </SubmitButton>
                </Form>

            </Card>
        </Wrapper>
    </Component>
  )
};

export default SignIn;



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
  @media screen and (max-width:760px){
    height: 35px;
width: 250px;
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
}
`

const Form = styled.form`

display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
  margin: 0 20px;
  padding-top: 50px;
  @media screen and (max-width:760px){
    
}
`


const Text = styled.div`
text-transform: capitalize;
@media screen and (max-width:760px){
    
}
`

const Card = styled.div`
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
height: 500px;
width: 500px;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
@media screen and (max-width:760px){
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
height: 300px;
width: 300px;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column 
}

`
const Wrapper = styled.div`
margin-top: 70px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items:center;
@media screen and (max-width:760px){
    margin-top: 70px;
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
@media screen and (max-width:760px){
    margin-top: 70px;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
display: flex;
align-items: center;
}
`