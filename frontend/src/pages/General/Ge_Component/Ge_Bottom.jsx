import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';
import HomeIcon from '@mui/icons-material/Home';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'crnter', position: 'fixed', bottom: 0, width: '100%' , zIndex: 1000, }}>
    <BottomNavigation
      sx={{ width: 1650, backgroundColor: '#318CE7' }} // Set background color
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon sx={{ fontSize: 30 }} />} // Increase icon size
      />
      <BottomNavigationAction
        label="Business"
        value="business"
        icon={<BusinessOutlinedIcon sx={{ fontSize: 30 }} />} // Increase icon size
      />
      <BottomNavigationAction
        label="Consultant"
        value="consultant"
        icon={<RememberMeOutlinedIcon sx={{ fontSize: 30 }} />} // Increase icon size
      />
      <BottomNavigationAction 
        label="Employer" 
        value="employer" 
        icon={<ManOutlinedIcon sx={{ fontSize: 30 }} />} // Increase icon size
      />
    </BottomNavigation>
    </div >
  );
}
