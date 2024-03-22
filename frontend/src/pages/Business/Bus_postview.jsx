import React from 'react';
import ResponsiveAppBar from './Components/Navigator';
import LabelBottomNavigation from '../../Components/bottom';

const BusinessPostView = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <br />
    <br /><br /><br /><br /><br />
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.profile}>
          <img
            src="https://realise.business/wp-content/uploads/2023/08/Crafting-an-impressive-online-brand-profile-1.png"
            alt="Profile"
            style={styles.profileImage}
          />
          <div style={styles.profileInfo}>
            <h2 style={styles.profileName}>John Doe</h2>
            <p style={styles.profileTitle}>Software Developer</p>
          </div>
        </div>
        <h1 style={styles.heading}>Business Post</h1>
      </div>
      <div style={styles.postContainer}>
        <div style={styles.postContent}>
          <h2 style={styles.postTitle}>Title of the Business Post</h2>
          <p style={styles.postDescription}>
            Description of the business post goes here. This could be a detailed overview of the
            business or any related information.
          </p>
        </div>
        <div style={styles.postImage}>
          <img
            src="https://d.newsweek.com/en/full/2324295/professional-financial-business.jpg"
            alt="Business Post"
            style={styles.image}
          />
        </div>
      </div>
      <div style={styles.actions}>
        <button style={styles.button}>like</button>
        <button style={styles.button}>Comment</button>
        <button style={styles.button}>Share</button>
      </div>
    </div>
    <LabelBottomNavigation/>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
    fontSize: '25px',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  profileName: {
    fontSize: '20px',
    marginBottom: '5px',
  },
  profileTitle: {
    fontSize: '14px',
    color: '#666',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  postContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
  },
  postContent: {
    flex: '1',
  },
  postTitle: {
    fontSize: '30px',
    marginBottom: '10px',
    color: '#444',
  },
  postDescription: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#666',
  },
  postImage: {
    flex: '1',
    marginLeft: '10px',
   
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  actions: {
    marginTop: '20px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BusinessPostView;
