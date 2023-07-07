import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Login/Register';

const LandingPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Perform login authentication logic
    // Set loggedIn state to true and user state to the authenticated user
    setLoggedIn(true);
    setUser({ email, password });
  };

  const handleRegister = (email, password, companyName) => {
    // Perform registration logic
    // Set loggedIn state to true and user state to the registered user
    setLoggedIn(true);
    setUser({ email, password, companyName });
  };

  return (
    <div className="landing-page">
      {loggedIn ? (
        <div>
          <h1>Welcome, {user.companyName}!</h1>
          {/* Include the rest of your landing page content here */}
        </div>
      ) : (
        <div>
          <Login handleLogin={handleLogin} />
          <Register handleRegister={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
