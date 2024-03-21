import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './pages/Loging/login';
import SignUp from './pages/Loging/signup';
import Consultantdashb from './pages/consultant/consultantdashb';
import Ge_Home from './pages/General/Ge_Home';
import RecipeReviewCard from './Components/recipeReviewCard';
import Ge_skill from './pages/General/Ge_skill';


function App() {
  return (
   
    <BrowserRouter>
      <Routes> 
        <Route path='' element={<SignInSide />} />
        <Route path='/signin' element={<SignInSide />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/consultantdashb' element={<Consultantdashb />} />
        <Route path='/recipeReviewCard' element={<RecipeReviewCard />} />
        <Route path='/header' element={<header/>} />

        <Route path='/gehome' element={<Ge_Home />} />
        <Route path='/Ge_skill'element={<Ge_skill/>} />
      
      </Routes>
    </BrowserRouter>


  );
  
}

export default App;
