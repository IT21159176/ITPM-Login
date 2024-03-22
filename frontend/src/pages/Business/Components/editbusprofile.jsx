import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Frame = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      marginTop: '20px',
      marginBottom: '10px',
      bgcolor: '#c4e3f5', // Set background color to #c4e3f5
      padding: '20px' // Add padding to create space between the border and the background
    }}
  >
    <Box
      sx={{
        width: '100%',
        maxWidth: 600, // Reduced width further
        border: '2px solid black',
        bgcolor: '#F2F3F4', // Set background color inside the border to #F2F3F4
        padding: '20px' // Add padding to create space between the content and the border
      }}
    >
      {children}
    </Box>
  </Box>
);

export default function Editbusprofile() {
  const [businessName, setBusinessName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [industry, setIndustry] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [photo, setPhoto] = React.useState(null);

  const handleBusinessNameChange = (e) => {
    setBusinessName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSave = () => {
    // You can handle form submission here
    console.log("Form submitted with data:", { businessName, email, industry, bio, photo });
  };

  const handleDeleteProfile = () => {
    // Logic to delete the profile
    console.log("Profile deleted");
  };

  return (
    <Frame>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>Edit Business Profile</h2>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ width: '50%', marginRight: '10px' }}>
          <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ display: 'none' }} id="upload-photo" />
          <label htmlFor="upload-photo">
            <Button variant="contained" component="span" color="primary" size="small">
              Add Profile Image
            </Button>
          </label>
        </div>
        <div style={{ width: '50%' }}>
          {photo && (
            <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
              <img src={URL.createObjectURL(photo)} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="businessName">Business Name:</label>
        <input type="text" id="businessName" value={businessName} onChange={handleBusinessNameChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="industry">Industry:</label>
        <input type="text" id="industry" value={industry} onChange={handleIndustryChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" value={bio} onChange={handleBioChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        size="small"
        style={{ marginRight: '10px' }}
      >
        Save Changes
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={handleDeleteProfile}
        size="small"
      >
        Delete Profile
      </Button>
    </Frame>
  );
}
