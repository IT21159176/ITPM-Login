import React, { useState } from 'react';
import Ge_Header from './Ge_Component/Ge_Header';
import Ge_post from './Ge_post';
import LabelBottomNavigation from '../../Components/bottom';
import Ge_SideBar from './Ge_Component/Ge_SideBar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Ge_Home() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    console.log(`Button ${buttonNumber} clicked`);
  };

  return (
    
    <>
      <Ge_Header />
      <Ge_SideBar activeButton={activeButton} handleClick={handleClick} />
      <LabelBottomNavigation />

      <div style={mainContentStyle}>
        <div style={postsContainerStyle}>
          <div style={postStyle}>
            <Ge_post />
          </div>
          <div style={postStyle}>
            <Ge_post />
          </div>
          <div style={postStyle}>
        

            <Stack spacing={3} direction="row" down= {10} >
                <Button variant="contained">update post </Button>
                <Button variant="outlined"> Edit post </Button>
             </Stack>

          </div>
        </div>
      </div>
    </>
  );
}

const mainContentStyle = {
  marginLeft: '10px', // Adjusted to accommodate the width of the sidebar
  display: 'flex',
  alignItems: 'flex-start',
  marginTop: '40px',
};

const postsContainerStyle = {
  display: 'flex',
};

const postStyle = {
  marginRight: '20px',
};
