import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Edit, CloudDownload } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const Frame = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: 490,
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#c4e3f5',
      marginBottom: '40px' // Light blue background color
    }}
  >
    {children}
  </Box>
);

const ProfilePhoto = ({ photoUrl, handlePhotoUpload }) => (
    <>
      {photoUrl && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img
            src={photoUrl}
            alt="Profile"
            style={{ width: '170px', height: '170px', borderRadius: '50%' }}
          />
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          id="upload-photo" // add an id for associating with label
          style={{
            display: 'none' // hide the default input button
          }}
        />
        <label htmlFor="upload-photo" style={{ // associate label with input using htmlFor
            marginBottom: '20px', 
            width: '120px', // Adjust the width of the file input button
            backgroundColor: '#007bff', // custom styling
            color: '#fff', // custom styling
            textAlign: 'center', // custom styling
            borderRadius: '5px', // custom styling
            padding: '8px', // custom styling
            cursor: 'pointer', // custom styling
            fontSize: '14px' // reduce font size
        }}>
          Upload Photo
        </label>
      </div>
    </>
  );

const UserProfile = () => {
  const navigate = useNavigate();
  const [photoUrl, setPhotoUrl] = React.useState('');

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Frame>
      <ProfilePhoto photoUrl={photoUrl} handlePhotoUpload={handlePhotoUpload} />
      <Typography variant="h4" gutterBottom style={{ fontSize: '1.8rem' }}>
        John Doe
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{ fontSize: '1.2rem' }}>
        <b>Age:</b> 30
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{ fontSize: '1.2rem' }}>
        Email: john.doe@example.com
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{ fontSize: '1.2rem' }}>
        Contact: +1 123-456-7890
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontSize: '1rem' }}>
        <b>Bio:</b>
        <p>
          John Doe is a passionate software developer with a strong background in computer science
          and software engineering. He has experience working with JavaScript, React.js, Node.js,
          HTML, and CSS. He holds a Bachelor's degree in Computer Science from the University of
          Example and a Master's degree in Software Engineering from Example Institute of Technology.
        </p>
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontSize: '1rem' }}>
        <b>Education:</b>
        <ul>
          <li>Bachelor's in Computer Science, University of Example, 2016-2020</li>
          <li>Master's in Software Engineering, Example Institute of Technology, 2020-2022</li>
        </ul>
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontSize: '1rem' }}>
        <b>Skills:</b>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Edit />}
        size="small"
        style={{ marginRight: '10px', marginBottom: '10px' }}
        onClick={()=>navigate('/buseditprofile')}
      >
        Edit Profile
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudDownload />}
        size="small"
        style={{ marginBottom: '10px' }}
      >
        Download
      </Button>
    </Frame>
  );
}

export default UserProfile;
