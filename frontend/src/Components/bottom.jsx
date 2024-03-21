import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'crnter', position: 'fixed', bottom: 0, width: '100%' , zIndex: 1000, }}>
      <BottomNavigation sx={{ width: 4000 }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Business"
          value="business"
          icon={<BusinessOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Consultant"
          value="consultant"
          icon={<RememberMeOutlinedIcon />}
        />
        <BottomNavigationAction 
          label="Employer" 
          value="employer" 
          icon={<ManOutlinedIcon />} 
        />
      </BottomNavigation>
    </div>
  );
}
