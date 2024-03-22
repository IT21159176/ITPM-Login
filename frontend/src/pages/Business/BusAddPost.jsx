import React, { useState } from 'react';
import ResponsiveAppBar from './Components/Navigator';
import LabelBottomNavigation from '../../Components/bottom';

const BusinessAdForm = () => {
  // State variables to store form data
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the form data to your backend or perform any desired action
    console.log('Form submitted:', { title, description, contact, price, image });
  };

  // Function to handle image upload
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  // Function to handle image delete
  const handleImageDelete = () => {
    setImage(null);
  };

  return (
    <>
    <ResponsiveAppBar/>
    <br /><br /><br />


    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px',maxHeight:'1000px', margin: 'auto', marginTop: '50px', backgroundColor:'#9EB8D9', padding: '20px',borderRadius: '10px', }}>
      <h2 style={{ textAlign: 'center', fontSize: '20px' }}>
  <span style={{ border: '1px solid black', padding: '15px', borderRadius: '5px',backgroundColor:'#36C186' }}>Post Your Business Ad</span>
</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px', position: 'relative' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ position: 'absolute', zIndex: '1', opacity: '0' }}
          />
          <button type="button" onClick={() => document.querySelector('input[type=file]').click()} style={{ position: 'absolute', zIndex: '2', backgroundColor: '#007bff', color: '#fff', padding: '3px 40px', border: 'none', borderRadius: '5px', cursor: 'pointer',position:'top' }}>Choose File</button>
          {image && 
            <>
              <img src={URL.createObjectURL(image)} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px', border: '2px solid #000', padding: '5px', display: 'block', margin: '0 auto', borderRadius:'8px' }} />
              <div style={{ textAlign: 'center', marginTop: '5px' }}>
                <button type="button" onClick={handleImageDelete} style={{ backgroundColor: 'red', color: '#fff', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>Delete</button>
                <button type="button" style={{ backgroundColor: '#007bff', color: '#fff', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Edit</button>
              </div>
            </>
          }
        </div>
        <div style={{ marginBottom: '50px' }}>
          <label>Business Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px', borderRadius:'5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px' , borderRadius:'5px'}}
            required
          />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <label>Contact Information:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px', borderRadius:'5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <label>Links:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px', borderRadius:'5px' }}
            required
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>

    <LabelBottomNavigation/>
    </>
  );
};

export default BusinessAdForm;
