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

export default function Create() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [photo, setPhoto] = React.useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handlePost = () => {
    // You can handle post submission here
    console.log("Post submitted with data:", { title, description, photo });
  };

  return (
    <Frame>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>Create Post</h2>
      <div style={{ marginBottom: '20px' }}>
        <input type="text" id="title" value={title} onChange={handleTitleChange} placeholder="Enter Post Title" style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid black' }} />
        <textarea id="description" value={description} onChange={handleDescriptionChange} placeholder="Enter Post Description" style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid black' }} />
        <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ display: 'none' }} id="upload-photo" />
        <label htmlFor="upload-photo">
          <Button variant="contained" component="span" color="primary" size="small">
            Upload Photo
          </Button>
        </label>
        {photo && (
          <div style={{ width: '100px', height: '100px', overflow: 'hidden', margin: '10px 0' }}>
            <img src={URL.createObjectURL(photo)} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handlePost}
        size="small"
        style={{ width: '100%' }}
      >
        Post
      </Button>
    </Frame>
  );
}
