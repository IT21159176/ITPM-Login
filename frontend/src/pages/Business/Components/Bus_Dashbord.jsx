import React from 'react';
import ResponsiveAppBar from '../../../Components/navigator';
import LabelBottomNavigation from '../../../Components/bottom';

const SideNavBar = () => {
  return (
   <>
   <ResponsiveAppBar/>

    <div style={sideNavBarStyle}>
      <div style={profileContainerStyle}>
        <img src="/path/to/profile-pic.jpg" alt="Profile" style={profileImageStyle} />
        <button style={editProfileButtonStyle}>Edit Profile</button>
      </div>
      
      <div style={menuStyle}>
        <ul style={listStyle}>
          <li style={listItemStyle}><a href="#home" style={linkStyle}>Home</a></li>
          <li style={listItemStyle}><a href="#about" style={linkStyle}>About</a></li>
          <li style={listItemStyle}><a href="#services" style={linkStyle}>Services</a></li>
          <li style={listItemStyle}><a href="#contact" style={linkStyle}>Contact</a></li>
        </ul>
      </div>
    </div>
    <LabelBottomNavigation/>
    </>
  );
};

const sideNavBarStyle = {
  height: '1000px',
  width: '230px',
  position: 'flex',
  zIndex: '1',
  top: '',
  left: '0',
  backgroundColor: '#1B6B93',
  overflowX: 'hidden',
  paddingTop: '60px',
};

const profileContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const profileImageStyle = {
  width: '100',
  height: '100px',
  borderRadius: '50%',
  marginBottom: '10px',
};

const editProfileButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '20px',
  cursor: 'pointer',
};

const headerStyle = {
  backgroundColor: '#111',
  textAlign: 'center',
};

const logoStyle = {
  fontSize: '24px',
  color: 'white',
  padding: '10px',
};

const menuStyle = {
  paddingTop: '20px',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const listItemStyle = {
  padding: '10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

export default SideNavBar;

