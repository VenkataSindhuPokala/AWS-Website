// import Description from './CommonComponents/Description';
import React from 'react';
import './App.css';
import Newaccount from './Components/New-aws';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
 import Signingup from './Components/Signup';
import Main from './main';

function App() {
  return (
    <>
   <BrowserRouter>
         <Routes>
           <Route exact path="" element={<Main/>}></Route>
           <Route exact path="/signup" element={<Signingup/>}></Route>
           <Route exact path="/Newaccount" element={<Newaccount/>}></Route>
           <Route exact path="/Signingup" element={<Signingup/>}></Route>
           <Route exact path="/Main" element={<Main/>}></Route>
  
           </Routes>
   </BrowserRouter>

    </>
  
  );
}

export default App;
