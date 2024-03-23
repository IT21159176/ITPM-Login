import React from 'react';
import Ge_Header from './Ge_Component/Ge_Header';
import LabelBottomNavigation from '../../Components/bottom';
import RecipeReviewCard from '../../Components/recipeReviewCard';

// eslint-disable-next-line react/prop-types
export default function Ge_viewProfiles({ children }) {
  return (
    <>
    <Ge_Header />
  <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: '64px' }}>
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '7px', maxHeight: 'calc(100vh - 64px)' }}>
          {children}
        </div>
        <div style={{ flex: 2, overflowY: 'auto', paddingRight: '7px', maxHeight: 'calc(100vh - 64px)' }}>
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
        <LabelBottomNavigation />
      </div>
    </>
  );
}
