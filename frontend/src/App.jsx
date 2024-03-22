import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './pages/Loging/login';
import SignUp from './pages/Loging/signup';
import Consultantdashb from './pages/consultant/consultantdashb';
import Ge_Home from './pages/General/Ge_Home';
import RecipeReviewCard from './Components/recipeReviewCard';
import Ge_skill from './pages/General/Ge_skill';
import Ge_Marketplace from './pages/General/Ge_Marketplace';
import Ge_Profile from './pages/General/Ge_Profile';
import Ge_jobSearch from './pages/General/Ge_jobSearch';
import Createprofile from './pages/consultant/createprofile';
import BusinessRegisterForm from './pages/Business/AccRegister';
import HomePage from './pages/Business/Bus_Homepage';
import BusinessPostView from './pages/Business/Bus_postview';
import BusinessAdForm from './pages/Business/BusAddPost';
import BusinessAdedite from './pages/Business/BusEditPost';
import BusinessFeed from './pages/Business/BusinessFeed';
import ConsultantProfileForm from './Components/consultantProfileForm';
import Editconprofile from './Components/editconprofile';
import Editconsultantprofile from './pages/consultant/editconsultantprofile';

import Postcreate from './pages/consultant/postcreate';
import Postedit from './pages/consultant/postedit';

import EditBusinessprofile from './pages/Business/EditBusinessProf';
import BusDashboardPage from './pages/Business/BusAnalyticsDash';


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
        <Route path='/createprofile' element={<Createprofile/>} />
        <Route path='/consultantProfileForm' element={<ConsultantProfileForm/>} />
        <Route path='/Editconprofile' element={<Editconprofile/>} />
        <Route path='/Editconsultantprofile' element={<Editconsultantprofile/>} />
        <Route path='/postcreate' element={<Postcreate/>} />
        <Route path='/postedit' element={<Postedit/>} />





        <Route path='/gehome' element={<Ge_Home />} />
        <Route path='/Ge_skill'element={<Ge_skill/>} />
        <Route path='/Ge_Marketplace'element={<Ge_Marketplace/>} />
        <Route path='/Ge_Profile'element={<Ge_Profile/>} />
        <Route path='/Ge_jobSearch'element={<Ge_jobSearch/>} />


        <Route path='/accRegister' element={<BusinessRegisterForm />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/businesspost' element={<BusinessPostView />} />
        <Route path='/busaddpost' element={<BusinessAdForm />} />
        <Route path='/busaddpostedite' element={<BusinessAdedite />} />
        <Route path='/businessfeed' element={<BusinessFeed />} />
        <Route path='/buseditprofile' element={<EditBusinessprofile />} />
        <Route path='/busanalyticsdash' element={<BusDashboardPage />} />

      </Routes>
    </BrowserRouter>


  );
  
}

export default App;
