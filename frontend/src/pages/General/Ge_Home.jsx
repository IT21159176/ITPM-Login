import React, { useState } from 'react';
import Ge_Header from './Ge_Component/Ge_Header';
import Ge_post from './Ge_post';
import LabelBottomNavigation from '../../Components/bottom';
import Ge_SideBar from './Ge_Component/Ge_SideBar';

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
            <Ge_post />
          </div>
        </div>
      </div>
    </>
  );
}

const mainContentStyle = {
  marginLeft: '220px', // Adjusted to accommodate the width of the sidebar
  display: 'flex',
  alignItems: 'flex-start',
  marginTop: '50px',
};

const postsContainerStyle = {
  display: 'flex',
};

const postStyle = {
  marginRight: '20px',
};
