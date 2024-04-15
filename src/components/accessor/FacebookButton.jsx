import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import './accessor.css';

const FacebookButton = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      setIsLoggedIn(true);
      if (onLogin) {
        onLogin(response);
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <FacebookLogin
          appId="1845972325882306"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="facebook-login-button" // Add custom CSS class
          icon={<img src="facebook-logo.png" alt="Facebook Logo" />} // Use Facebook's logo
          textButton="Continue with Facebook" // Button text
        />
      )}
    </div>
  );
};

export default FacebookButton;
