import React from 'react';
import ResponsiveAppBar from '../../Components/navigator';
import LabelBottomNavigation from '../../Components/bottom';
import RecipeReviewCard from '../../Components/recipeReviewCard';
import Types from '../../Components/profilecard';
import ConsultantProfileForm from '../../Components/consultantProfileForm';
import Editconfrofile from'../../Components/editconprofile';


export default function Editconsultantprofile() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <ResponsiveAppBar />
      </div>
      <div style={{ backgroundColor: '#c4e3f5', minHeight: '100vh', padding: '64px 16px 56px' }}> {/* Setting background color */}
        <div>
          <Editconfrofile/>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
        <LabelBottomNavigation />
      </div>
    </>
  );
}
