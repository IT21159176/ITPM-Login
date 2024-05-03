import React from 'react';
import Editgeprofile from './Ge_Component/Ge_editProfile';
export default function Ge_ProfileEdit() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>

      </div>
      <div style={{ backgroundColor: '#c4e3f5', minHeight: '100vh', padding: '64px 16px 56px' }}> {/* Setting background color */}
        <div>
          <Editgeprofile/>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
      </div>
    </>
  );
}
