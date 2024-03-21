import React from 'react';
import ResponsiveAppBar from '../../Components/navigator';
import LabelBottomNavigation from '../../Components/bottom';
import RecipeReviewCard from '../../Components/recipeReviewCard';
import Types from '../../Components/profilecard';

export default function Consultantdashb() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <ResponsiveAppBar />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: '64px' }}>
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '8px' }}>
          <div style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
            <Types />
          </div>
        </div>
        <div style={{ flex: 2, overflowY: 'auto', paddingRight: '8px' }}>
          <div style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
          </div>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
        <LabelBottomNavigation />
      </div>
    </>
  );
}
