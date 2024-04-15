import React, { useState } from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import './accessor.css';

const LinkedInButton = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccess = (data) => {
    console.log('LINKEDIN LOGIN SUCCESS! Data: ', data);
    setIsLoggedIn(true);
    if (onLogin) {
      onLogin(data);
    }
  };

  const handleFailure = (error) => {
    console.error('LINKEDIN LOGIN FAILURE! Error: ', error);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderLinkedInButton = ({ onClick }) => (
    <button className="linkedin-login-button" onClick={onClick}>
      <img src="linkedin-logo.png" alt="LinkedIn Logo" /> {/* Use LinkedIn's logo */}
      <span>Continue with LinkedIn</span>
    </button>
  );

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LinkedIn
          clientId="86utt5o12hmi36"
          redirectUri="https://example.com/auth/linkedin/callback"
          onFailure={handleFailure}
          onSuccess={handleSuccess}
          renderElement={renderLinkedInButton}
        />
      )}
    </div>
  );
};

export default LinkedInButton;
