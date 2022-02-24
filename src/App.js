import {BrowserRouter, Routes,Route } from "react-router-dom"
import RegisterComp from "./Components/Header/RegisterComp";
import SignIn from "./Components/Header/SignIn";
import Home from "./Components/Home";
import TalentDash from "./Components/Dashboard/TalentDash";
import TalentHome from "./Components/Dashboard/TalentHome";

 
function App() {
  return (
   <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home/>}/>
         <Route path="/Register" element={<RegisterComp/>}/>
         <Route path="/SignIn" element={<SignIn/>}/>
         <Route path="/talent" element={<TalentDash/>}/>
         <Route path="home" element={<TalentHome/>}/>



       </Routes>
   </BrowserRouter>
  );
}

export default App;
