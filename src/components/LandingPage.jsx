import React from 'react';
import Login from './Login/Login';
import Register from './Login/Register';
import './LandingPage.css'; // Import the CSS file for styling
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Router>
        <h1>Welcome to the Landing Page!</h1>
        <p>Some introductory text about your recruitment solution.</p>
        <div className="button-container">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Routes>
      </Router>
    </div>
  );
};

export default LandingPage;


// const LandingPage = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [showLoginPage, setShowLoginPage] = useState(false);
//   const [showRegisterPage, setShowRegisterPage] = useState(false);

//   const handleLogin = (email, password) => {
//     // Perform login authentication logic
//     // Set loggedIn state to true and user state to the authenticated user
//     setLoggedIn(true);
//     setUser({ email, password });
//   };

//   const handleRegister = (email, password, companyName) => {
//     // Perform registration logic
//     // Set loggedIn state to true and user state to the registered user
//     setLoggedIn(true);
//     setUser({ email, password, companyName });
//   };

//   const handleLoginButtonClick = () => {
//     setShowLoginPage(true);
//   };

//   const handleRegisterButtonClick = () => {
//     setShowRegisterPage(true);
//   };

//   if (!loggedIn && showLoginPage) {
//     return <Login handleLogin={handleLogin} />;
//   }

//   if (!loggedIn && showRegisterPage) {
//     return <Register handleRegister={handleRegister} />;
//   }

//   return (
//     <div className="landing-page">
//       <h1>Welcome to the Landing Page!</h1>
//       <p>Some introductory text about your recruitment solution.</p>
//       {!loggedIn && (
//         <div>
//           <button onClick={handleLoginButtonClick}>Login</button>
//           <button onClick={handleRegisterButtonClick}>Register</button>
//         </div>
//       )}
//       {loggedIn && (
//         <div>
//           <h2>Welcome, {user.companyName}!</h2>
//           {/* Include the rest of your landing page content here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;
