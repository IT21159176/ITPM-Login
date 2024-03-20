import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './pages/Loging/login';
import ResponsiveAppBar from './Components/navigator';
import Bus_Signup from './pages/Business/Bus_signup';
import Bus_signin from './pages/Business/Bus_signin';  
import SignUp from './pages/Loging/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='' element={<SignInSide />} />
        <Route path='/signin' element={<SignInSide />} />
        <Route path='/signup' element={<SignUp />} />
        
        <Route path='' element={<SignUp />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignInSide />} />


        


      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
