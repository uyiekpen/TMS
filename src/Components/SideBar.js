import styled from 'styled-components';
import React from 'react';
import HomeIcon from '@mui/icons-material/HomeWork';
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Link } from 'react-router-dom';



const SideBar = ({toggle,setisOpen}) => {
  return (
    <Component>
        <Wrapper>
            <NavMenu >
            <Nav >
           <Icon>
              <HomeIcon />
            </Icon>
            <Link to="/Home"
            style={{
                textDecoration:"none", color:"white"
            }}
               onClick={() => {
                setisOpen(false);
              }}
            ><span>Home</span></Link>
          </Nav>

          <Nav>
           <Icon>
              <LocationCityIcon />
            </Icon>
            <span>Home</span>
          </Nav>

          <Nav>
           <Icon>
              <LibraryBooksIcon />
            </Icon>
            <span>Home</span>
          </Nav>

          <Nav>
           <Icon>
              <DeveloperModeIcon />
            </Icon>
            <Link to="/Register"
            style={{
                textDecoration:"none", color:"white"
            }}
               onClick={() => {
                setisOpen(false);
              }}
            ><span>Create an Account</span></Link>
          </Nav>
          <Nav>
           <Icon>
              <DeveloperModeIcon />
            </Icon>
            <Link to="/SignIn"
            style={{
                textDecoration:"none", color:"white"
            }}
               onClick={() => {
                setisOpen(false);
              }}
            ><span>Sign in</span></Link>
          </Nav>

            
        </NavMenu>
        
            
        </Wrapper>
       
  </Component>
  ) 
};

export default SideBar;


const Nav11 = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
  padding-left: 10px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  transition: all 350ms;
  text-align: center;
  width: 100%;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);

    font-size: 20px;
  }`
const Nav = styled.div`
  color: white;
  text-decoration: none;
  display: flex;
  margin: 0px 0;
  padding-left: 40px;
  height: 70px;
  width: 272px;
  display: flex;
  align-items: center;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);

    font-size: 20px;
  }
`

const Icon = styled.div`
  margin-right: 10px;
`
const NavMenu = styled.div`
display: flex;
  flex-direction: column;
  flex: 1;
`


const Wrapper = styled.div`
text-decoration:none;
color: #fff;
display: flex;
  flex-direction: column;
  width: 50%;
height: 100%;
`


const Component = styled.div`

position: fixed;
width: 50%;
height: 100%;
background-color: #004080;
z-index: 10;
top: 0;
left: 0;
display: flex;
color:white;
margin-top: 70px;
border-radius: 0px 0px 5px 0;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

`