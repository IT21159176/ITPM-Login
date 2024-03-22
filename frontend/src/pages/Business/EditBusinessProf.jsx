
import React from 'react';
import LabelBottomNavigation from '../../Components/bottom';

import ResponsiveAppBar from './Components/Navigator';
import Editbusprofile from './Components/editbusprofile';


export default function EditBusinessprofile() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <ResponsiveAppBar />
      </div>
      <div style={{ backgroundColor: '#c4e3f5', minHeight: '100vh', padding: '64px 16px 56px' }}> {/* Setting background color */}
        <div>
          <Editbusprofile/>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
        <LabelBottomNavigation />
      </div>
    </>
  );
}
