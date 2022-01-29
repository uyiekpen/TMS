import Header from "./Components/Header/Header";
import {BrowserRouter, Routes,Route } from "react-router-dom"
import RegisterComp from "./Components/Header/RegisterComp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import TalentDash from "./Components/Dashboard/TalentDash";
 
function App() {
  return (
   <BrowserRouter>
       <div>
        <Header/>
       </div>
       <Routes>
       <Route path="/" element={<Home/>}/>
         <Route path="/Register" element={<RegisterComp/>}/>
         <Route path="/SignIn" element={<SignIn/>}/>
         <Route path="/talent" element={<TalentDash/>}/>



       </Routes>
   </BrowserRouter>
  );
}

export default App;
