import React from 'react';
import ResponsiveAppBar from '../../Components/navigator';
import LabelBottomNavigation from '../../Components/bottom';
import Createpost from '../../Components/createpost';

export default function Postcreate() {
  React.useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <ResponsiveAppBar />
      </div>
      <div style={{ backgroundColor: '#c4e3f5', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> {/* Center vertically */}
        <div>
          <Createpost/>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
        <LabelBottomNavigation />
      </div>
    </>
  );
}
