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
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 1350 }} value={value} onChange={handleChange}>
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
      icon={<ManOutlinedIcon />} />
    </BottomNavigation>
  );
}