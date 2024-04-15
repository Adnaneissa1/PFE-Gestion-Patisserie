import React, { useState } from 'react';
import '../styles/hasAccount.css';
import Signup from './Signup'; 
import Signin from './Signin'; 

function HasAccount() {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleRadioChange = (event) => {
    setIsSigningUp(event.target.value === "signup");
  };

  return (
    <div className="App">
      <div className="image-section"></div>
      <div className="slider-radio">
        <div className='has-account'>
          <div>
            <input
              type="radio"
              id="signin"
              name="authType"
              value="signin"
              checked={!isSigningUp}
              onChange={handleRadioChange}
            />
            <label htmlFor="signin">I'm already registered</label>
          </div>
          <div>
            <input
              type="radio"
              id="signup"
              name="authType"
              value="signup"
              checked={isSigningUp}
              onChange={handleRadioChange}
            />
            <label htmlFor="signup">I'm new to Tanger Patisserie</label>
          </div>
        </div>
        <div className="">
          {isSigningUp ? <Signup /> : <Signin />}
        </div>
      </div>
    </div>
  );
}

export default HasAccount;
