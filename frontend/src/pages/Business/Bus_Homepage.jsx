import React from 'react';

import LabelBottomNavigation from '../../Components/bottom';

import Types from '../../Components/profilecard';
import RecipeReviewCard from './Components/PostReviewCard';
import ResponsiveAppBar from './Components/Navigator';
import UserProfile from './Components/ProfileSideBar';

export default function Consultantdashb() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <ResponsiveAppBar/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: '64px' }}>
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '6px' }}>
          <div style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
            <UserProfile/>
          </div>
        </div>
        <div style={{ flex: 2, overflowY: 'auto', paddingRight: '8px' }}>
          <div style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
            <RecipeReviewCard/>
            <br />
            <RecipeReviewCard/>
            <br />
            <RecipeReviewCard/>
            <br />
            <RecipeReviewCard/>
          </div>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
        <LabelBottomNavigation />
      </div>
    </>
  );
}
