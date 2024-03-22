import React from 'react';
import ResponsiveAppBar from '../../Components/navigator';
import LabelBottomNavigation from '../../Components/bottom';
import Edit from '../../Components/editpost';

export default function Postedit() {
  // Remove the useEffect hook that disables scrolling

  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <ResponsiveAppBar />
      </div>
      <div style={{ backgroundColor: '#c4e3f5', minHeight: '50vh', padding: '64px 16px 56px', overflowY: 'auto' }}> {/* Setting background color */}
        <div>
          <Edit/>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
        <LabelBottomNavigation />
      </div>
    </>
  );
}
