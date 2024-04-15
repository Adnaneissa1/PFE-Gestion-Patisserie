import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './accessor.css';

const clientId = '282442939736-eddm5p9iph6hfu9ufpi9pjm8a3c0sbqn.apps.googleusercontent.com';

function GoogleButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onSuccess = (res)=> {
        console.log('LOGIN SUCCESS! Current user: ', res.profileObj);
        setIsLoggedIn(true);
    }

    const onFailure = (res)=> {
        console.log('LOGIN FAILED! res: ', res);
    }

    const onLogoutSuccess = () => {
        console.log('LOGOUT SUCCESS!');
        setIsLoggedIn(false);
    }

    return (
        <div>
            {isLoggedIn ? (
                <GoogleLogout
                    className="logout-button" // Add class name for styling
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                />
            ) : (
                <GoogleLogin 
                    className="google-login-button" // Add class name for styling
                    clientId={clientId}
                    buttonText={<><img src="google-logo.png" alt="Google Logo" height="20" style={{ marginRight: '8px' }} /> Continue with Google</>}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    );
}

export default GoogleButton;
