import { Avatar } from '@mui/material'
import React from 'react'
import styled from "styled-components"

const SideBarRow = ({Icon,title,src}) => {
    return (
        <SideContainer>
          <Wrapper>
            {src && <Avatar src ={src}/> }
              {Icon && <Icon/>}
              <h4>{title}</h4>
          </Wrapper>
        </SideContainer>
    )
}

export default SideBarRow

const SideContainer =styled.div`
width: 300px;
height: 30px;
display: flex;
align-items: center;
padding: 10px;
  cursor: pointer;
  /* transition: 0.5s; */
`
const Wrapper = styled.div`
margin-top: 20px;
width: 250px;
display: flex ;
align-items: center;

  /* cursor: pointer;
  transition: 0.5s;
  background-color: #F0F2F5; */
&:hover{
  border-radius: 5px;
}
h4 {
    margin-left: 28px;

}
`