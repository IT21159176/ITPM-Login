import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Switch from '@mui/material/Switch'; // Import Switch component
import { useNavigate } from 'react-router-dom';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

export default function LabelBottomNavigation() {
  
  const [value, setValue] = React.useState('home');
  const [switchChecked, setSwitchChecked] = React.useState(false); // State for Switch
  const navigate = useNavigate();
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSwitchChange = () => {
    setSwitchChecked(!switchChecked); // Toggle Switch state
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
      <BottomNavigation
        sx={{ width: 1650, backgroundColor: '#318CE7' }} // Set background color
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon sx={{ fontSize: 30 }} />}
          onClick={() => navigate('/gehome')}
        />
        <BottomNavigationAction
          label="Business"
          value="business"
          icon={<BusinessOutlinedIcon sx={{ fontSize: 30 }} />}
          onClick={() => navigate('/HomePage')}
        />
        <BottomNavigationAction
          label="Consultant"
          value="consultant"
          icon={<RememberMeOutlinedIcon sx={{ fontSize: 30 }} />}
          onClick={() => navigate('/consultantdashb')}
        />
        <BottomNavigationAction 
          label="Employer" 
          value="employer" 
          icon={<ManOutlinedIcon sx={{ fontSize: 30 }} />} 
        />
      
      </BottomNavigation>
      

    </div>
  );
}
