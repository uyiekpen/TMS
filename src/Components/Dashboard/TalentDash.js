import React ,{useState}from 'react';
import styled from "styled-components"
import pix from "../Image/avatar.png"



const TalentDash = () => {
    const [led, setLed] = useState('')

  return <Component>
        <Wrapper>
            <NameHolder>Welcome Temi</NameHolder>
            <Text>Complete Your Bio</Text>
            <Another>Fill in  the form correctly</Another>
            <ImageHolder>
            <Image src={pix}/>
           
            <ImageButton htmlFor='pix'>Upload</ImageButton>
            <ImgInput id="pix" type="file" />
        </ImageHolder>
            <Form>
                <Input placeholder='First Name'/>
                <Input placeholder='Last Name'/>
                <Input  placeholder=' Permanent Address'/>
                <Input placeholder=' Current/Resident Address'/>
                <Input placeholder=' Current/Resident Address' type=""/>
                <DropDown>
                <Status>Status:</Status>
                <Selection
                value={led}
                onChange={(e) => {
                  setLed(e.target.value)
                }}
                >
                  <option value="Student" >Student</option>
                  <option value="Graduate" >Graduate</option>
                  <option value="intern" >intern</option>
                  
                  <option value="Self employed" >Self employed</option>
                  <option value="employee" >employee</option>
                </Selection>
              </DropDown>   
              <DropDown>
              <Status>Soft Skills:</Status>
              <Selection
              value={led}
              onChange={(e) => {
                setLed(e.target.value)
              }}
              >
                <option value="Interpersonal relationship
" >Interpersonal relationship
</option>
                <option value="Problem solving
" >Problem solving
</option>
                <option value="Research and development
" >Research and development
</option>
                
                <option value="Design and creativity
" >Design and creativity
</option>
                <option value="Analysis" >Analysis</option>
              </Selection>
            </DropDown>           
                      
              
              <DropDown>
                <Status>Gender:</Status>
                <Selection
                value={led}
                onChange={(e) => {
                  setLed(e.target.value)
                }}
                >
                  <option value="Male" >Male</option>
                  <option value="Female" >Female</option>
                  <option value="Rather Not Say" >Rather Not Say</option>
                </Selection>
              </DropDown>      
              
              
              <DropDown>
                <Status>Programming skills:</Status>
                <Selection
                value={led}
                onChange={(e) => {
                  setLed(e.target.value)
                }}
                >
                  <option value="Amateur level
" >Amateur level
</option>
                  <option value="Intermediate level
" >Intermediate level
</option>
                  <option value="Standard level
" >Standard level
</option>
                </Selection>
              </DropDown> 
              <DropDown>
                <Status>Field interests:</Status>
                <Selection
                value={led}
                onChange={(e) => {
                  setLed(e.target.value)
                }}
                >
                  <option value="Development 
" >Development 
</option>
                  <option value="IoT
" >IoT
</option>
                  <option value="Programming" >Programming</option>
                </Selection>
              </DropDown>     

              <div>ID upload:</div> 
              <InputF type="file" placeholder='Guardian/sponsors’ ID upload
              '/>
              <Label>Guardain information:</Label> 
              <Input placeholder='Guardian/sponsors’ name'/>
              <div>Guardian/sponsors’ ID upload:</div> 
              <InputF type="file" placeholder='Guardian/sponsors’ ID upload
              '/>
              <Input placeholder='Guardian/sponsors’ contact address'/>
              <Input placeholder='Guardian/sponsors’ phone number'/>


               
            </Form>
            <Button type="submit">Register</Button>


        </Wrapper>
  </Component>;
};

export default TalentDash;

const InputF = styled.input`

`

const ImageHolder = styled.div`
height: 300px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
`

const Image = styled.img`
height: 150px;
width: 150px;
border-radius: 100%;
border: 2px solid black;
`

const ImageButton = styled.label`
height: 40px;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
background-color: turquoise;
border-radius: 8px;
margin-top: 20px;
`
const ImgInput = styled.input`
display: none;
`
const Label = styled.div`
font-weight: bold;
margin-top: 20px;

`

const Button = styled.button`
  padding: 15px 35px;
  background-color: #004080;
  border-radius: 3px;
  margin: 0 10px;
  transform: scale(1);
  transition: all 350ms;
  color: white;
  margin: 20px 0;
  border: 0;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;

const Status = styled.div`
width: 200px;
font-size: 17px;
`

const Selection = styled.select`
      width:200px;
       height:50px;
       padding-left:10px;
       margin-left:10px;
       color: black;
       font-weight: lighter;
       font-family: Poppins;
       border: 1px solid lightgray;

       
       option{
         font-family: Poppins;
         font-weight: lighter;
       }
`
const DropDown = styled.div`
    display:flex;
    height:40px;
    align-items:center;
    margin-top:10px;
    margin: 20px 0;
    @media screen and (max-width: 760px) {
        display:flex;
    height:40px;
    align-items:center;
    margin-top:10px;
    margin: 20px 0;
    width   :300px ;
    }
    @media screen and (max-width: 460px) {
        display:flex;
    height:40px;
    align-items:center;
    margin-top:10px;
    margin: 20px 0;
    width   :280px ;
    }
`

const Input = styled.input`
height: 50px;
width: 500px;
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
  @media screen and (max-width: 760px) {
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
  }
  @media screen and (max-width: 460px) {
    height: 40px;
width: 280px;
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
flex-direction: column;

`

const Another = styled.div`

`
const Text = styled.div`

`
const NameHolder = styled.div`

`

const Wrapper = styled.div`
width: 90%;
height: 100%;
@media screen and (max-width: 760px) {
width: 90%;
height: 100%;    
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}


`


const Component = styled.div`
margin-top: 70px;
display: flex;
width: 100%;
height: 100%;
display: flex;
font-family: Poppins;
min-height: calc(100% - 100px);
justify-content: center;
align-items: center;
@media screen and (max-width: 760px) {
margin-top: 70px;
display: flex;
width: 100%;
height: 100%;
display: flex;
font-family: Poppins;
min-height: calc(100% - 100px);
justify-content: center;
align-items: center;

  }
`