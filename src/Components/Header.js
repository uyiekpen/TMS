import { color } from '@mui/system';
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
         {
              toggle ? (
                <NavMenu>
                <MenuOpenIcon onClick={toggle}/>
                    { isOpen ? <SideBar toggle = {toggle} setisOpen={setisOpen}/> : null}
                    
                   
                </NavMenu>
              ) : (
                <NavMenu>
                <HighlightOffIcon onClick={toggle}/>
                    
                   
                </NavMenu>
              )
         }
            
          
                   
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


const Logo = styled.div``

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
height: 70px;
width: 90%;
display: flex;
align-items: center;
font-family: poppins;
justify-content: space-between;
`

const Container = styled.div`
background-color:#fff;
height: 70px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: -1;
top: 0;
bottom: 0;
right: 0;
left: 0;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
