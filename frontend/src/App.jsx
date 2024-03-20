import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './pages/Loging/login';
import ResponsiveAppBar from './Components/navigator';
import Bus_Signup from './pages/Business/Bus_signup';
import Bus_signin from './pages/Business/Bus_signin';
function App() {
  return (
    <>
      < Bus_signin/>
    </>
    // <BrowserRouter>
    //   <Routes> 

    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
