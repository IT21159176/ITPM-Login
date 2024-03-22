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

export default function ConsultantProfileForm() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [skills, setSkills] = React.useState('');
  const [education, setEducation] = React.useState('');
  const [photo, setPhoto] = React.useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSave = () => {
    // You can handle form submission here
    console.log("Form submitted with data:", { name, age, email, contact, description, skills, education, photo });
  };

  return (
    <Frame>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>Create Consultant Profile</h2>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ width: '50%', marginRight: '10px' }}>
          <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ display: 'none' }} id="upload-photo" />
          <label htmlFor="upload-photo">
            <Button variant="contained" component="span" color="primary" size="small">
              Upload Photo
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
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={handleAgeChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="contact">Contact:</label>
          <input type="text" id="contact" value={contact} onChange={handleContactChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <label htmlFor="skills">Skills:</label>
          <textarea id="skills" value={skills} onChange={handleSkillsChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <label htmlFor="education">Education:</label>
          <textarea id="education" value={education} onChange={handleEducationChange} style={{ width: '100%', padding: '8px', border: '1px solid black' }} />
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        size="small"
        style={{ marginBottom: '10px' }}
      >
        Save
      </Button>
    </Frame>
  );
}
