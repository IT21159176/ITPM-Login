import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './pages/Loging/login';
import ResponsiveAppBar from './Components/navigator';
import SignUp from './pages/Loging/signup';
import LabelBottomNavigation from './Components/bottom';
import Consultantdashb from './pages/consultant/consultantdashb';
import RecipeReviewCard from './Components/recipeReviewCard';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccRegister from './pages/Business/AccRegister';
import Bus_Homepage from './pages/Business/Bus_Homepage';
import BusinessRegisterForm from './pages/Business/AccRegister';
import HomePage from './pages/Business/Bus_Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='' element={<SignInSide />} />
        <Route path='/signin' element={<SignInSide />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/consultantdashb' element={<Consultantdashb />} />
        <Route path='/recipeReviewCard' element={<RecipeReviewCard />} />
        <Route path='/accRegister' element={<BusinessRegisterForm />} />
        <Route path='/homepage' element={<HomePage />} />
      </Routes>
      
      
      
      
      
      
      
      
    </BrowserRouter>
  );
  
}

export default App;
