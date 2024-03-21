import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';
import HomeIcon from '@mui/icons-material/Home';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
  );
}
