import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './pages/Loging/login';
import ResponsiveAppBar from './Components/navigator';

function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <SignInSide />
    </>
    // <BrowserRouter>
    //   <Routes> 

    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
