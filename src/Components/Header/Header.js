import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SideBar from './SideBar';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



const Header = () => {
    const [isOpen , setisOpen] = useState(false)

    const toggle = () =>{
        setisOpen(!isOpen)
    }
  return (
  <Container>
      <Wrapper>
          <LogoHolder>
              <Logo>.Tribinnov</Logo>
          </LogoHolder>
          <MainDiv>
          <Nav>
              <a>Home</a>
          </Nav>
          <ButtonHolder>
                <Button1 ><Link to="/Register" style={{textDecoration:"none", color:"white"}}> Sign Up</Link></Button1>
                
          </ButtonHolder>
          </MainDiv>
         
                <NavMenu>
                <MenuOpenIcon onClick={toggle}/>
                    { isOpen ? <SideBar toggle = {toggle} setisOpen={setisOpen}/> : null}
                    
                   
                </NavMenu>

            
          
                   
      </Wrapper>
  </Container>
  )
};

export default Header;



const NavMenu = styled.div`
display: none;
@media screen and (max-width: 760px){
    display:  block;
}
`


const Button1 = styled.button`
height: 45px;
width: 100px;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background: #123456;
text-decoration: none;
color: white;
`


const ButtonHolder = styled.div``


const Nav = styled.div``


const Logo = styled.div`

`

const MainDiv = styled.div`
width: 70%;
display: flex;
justify-content: center;
align-items: center;
text-transform: capitalize;
justify-content: space-between;
@media screen and (max-width: 760px){
    display:  none;
}

`


const LogoHolder = styled.div`
height: 70px;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
text-transform: capitalize;
font-weight: bold;
`

const Wrapper = styled.div`
 height: 100%;
  display: flex;
  margin: 0 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`

const Container = styled.div`
width: 100%;
  height: 70px;
  background-color: ${({ bg }) => (bg ? "#004080" : "transparent")};
  color: ${({ bg }) => (bg ? "white" : "#004080")};
  position: fixed;
  z-index: 1;
  min-height: calc(100vh-100px);
  top: 0;
  bottom: 0;

`
