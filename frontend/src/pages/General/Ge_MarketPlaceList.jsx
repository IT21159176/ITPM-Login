import React, { useState } from 'react';
import Ge_Header from './Ge_Component/Ge_Header';
import LabelBottomNavigation from '../../Components/bottom' ;



const Ge_MarketplaceList = () => {
  const [formData, setFormData] = useState({
    profilePicture: '',
    Name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
 

  return (
     <>  
        <Ge_Header />
        <LabelBottomNavigation />
       
            <br>
            </br>

    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={inputContainer}>
            <br />
      </div>
      <div style={inputContainer}>
        <h7>Market Place</h7>
      
        <label style={labelStyle} htmlFor="Name"> Item Name:</label>
        <input
          style={inputStyle}
          type="text"
          id="Name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          required
        />
      </div>
      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="email">Used/New :</label>
        <input
          style={inputStyle}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="Education">Address:</label>
        <input
          style={inputStyle}
          type="Education"
          id="Education"
          name="Education"
          value={formData.Education}
          onChange={handleChange}
          required
        />
      </div>

      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="Bio">Description:</label>
        <input
          style={inputStyle}
          type="Bio"
          id="Bio"
          name="Bio"
          value={formData.Bio}
          onChange={handleChange}
          required
        />
      </div>
      
      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="skills">Year of making:</label>
        <input
          style={inputStyle}
          type="skills"
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />
      </div>

      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="Work_Experience">Work Experience:</label>
        <input
          style={inputStyle}
          type="Work_Experience"
          id="Work_Experience"
          name="Work_Experience"
          value={formData.Work_Experience}
          onChange={handleChange}
          required
        />
      </div>


      <div style={inputContainer}>
        <label style={labelStyle} htmlFor="password">Price:</label>
        <input
          style={inputStyle}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
     
      <button style={buttonStyle} type="submit"> list Item </button>
      <br></br>
    </form>
    <br /><br />

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
  backgroundColor: '#41C9E2',
  
  
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
  backgroundColor: '#9ADE7B',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '1rem',
};


export default Ge_MarketplaceList;
