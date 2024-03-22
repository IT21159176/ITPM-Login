import React, { useState } from 'react';
import ResponsiveAppBar from './Components/Navigator';
import LabelBottomNavigation from '../../Components/bottom';

const BusinessRegisterForm = () => {
  const [formData, setFormData] = useState({
    profilePicture: '',
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
    industry: '',
    description: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, profilePicture: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
 

  return (
     <>
  <ResponsiveAppBar/>
       
            <br></br>
            <br />
            <br /><br />

    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={inputContainer}>
            <br />
        <label style={labelStyle} htmlFor="profilePicture">  Profile Picture:</label>
        <input
          style={inputStyle}
          type="file"
          id="profilePicture"
          name="profilePicture"
          accept="image/*"
          onChange={handleFileChange}
        />
        {formData.profilePicture && (
          <img src={formData.profilePicture} alt="Profile" style={imagePreview} />
        )}
      </div>
      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="businessName">Business Name:</label>
        <input
          style={inputStyle}
          type="text"
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
        />
      </div>
      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="industry">Industry:</label>
        <input
          style={inputStyle}
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
        />
      </div>
      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="description">Description:</label>
        <textarea
          style={inputStyle}
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="bio">Bio:</label>
        <textarea
          style={inputStyle}
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          required
        />
      </div>
      <button style={buttonStyle} type="submit">Register</button>
      <br></br>
    </form>
    <br /><br /><br /><br />

    <LabelBottomNavigation/>

    </>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '550px',
  margin: 'auto',
  borderRadius: '20px',
  backgroundColor: '#B4BDFF',
};

const inputContainer = {
  marginBottom: '1rem',
  display: 'flex',
  flexDirection: 'column',
  width: '450px'
};

const labelStyle = {
  marginBottom: '0.5rem',
};

const inputStyle = {
  padding: '0.3rem',
  borderRadius: '10px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  width: '100%',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '1rem',
};

const imagePreview = {
  maxWidth: '50%',
  height: '200px',
  marginTop: '0.5rem',
  borderRadius: '100%',
  display: 'flex',
  Container: 'center', 
};

export default BusinessRegisterForm;
