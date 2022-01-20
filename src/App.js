import Header from "./Components/Header";
import {BrowserRouter, Routes,Route } from "react-router-dom"
import RegisterComp from "./Components/RegisterComp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
 
function App() {
  return (
   <BrowserRouter>
       <div>
        <Header/>
       </div>
       <Routes>
       <Route path="/home" element={<Home/>}/>
         <Route path="/Register" element={<RegisterComp/>}/>
         <Route path="/SignIn" element={<SignIn/>}/>


       </Routes>
   </BrowserRouter>
  );
}

export default App;
