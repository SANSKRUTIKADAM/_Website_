import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Login/Register';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginPage, setShowLoginPage] = useState(true);

  const handleLogin = (email, password) => {
    setLoggedIn(true);
    setUser({ email, password });
    setShowLoginPage(false);
  };

  const handleRegister = (email, password, companyName) => {
    setLoggedIn(true);
    setUser({ email, password, companyName });
    setShowLoginPage(false);
  };

  const handleRegisterPage = () => {
    setShowLoginPage(false);
  };

  const handleLoginPage = () => {
    setShowLoginPage(true);
  };

  if (!loggedIn && !showLoginPage) {
    return <Login handleLogin={handleLogin} handleRegisterPage={handleRegisterPage} />;
  }

  if (!loggedIn && showLoginPage) {
    return <Register handleRegister={handleRegister} handleLoginPage={handleLoginPage} />;
  }

  return (
    <div className="landing-page">
      <h1>Welcome, {user.companyName}!</h1>
    </div>
  );
};

export default LandingPage;
