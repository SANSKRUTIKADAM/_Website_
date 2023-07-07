import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Login/Register';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchJobRole, setSearchJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);

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

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic based on searchLocation and searchJobRole
    // Update candidates state with fetched candidates
    const fetchedCandidates = [
      // Mock candidates data, replace with actual fetched candidates
      { id: 1, name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', location: 'Los Angeles', jobRole: 'UI/UX Designer' },
      { id: 3, name: 'Mike Johnson', location: 'Chicago', jobRole: 'Data Analyst' },
    ];
    setCandidates(fetchedCandidates);
  };

  return (
    <div className="landing-page">
      {loggedIn ? (
        <div>
          <h1>Welcome, {user.companyName}!</h1>
          {/* Include the rest of your landing page content here */}
          <section className="search-section">
            <h2>Find Candidates</h2>
            <form onSubmit={handleSearch}>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
              <label htmlFor="jobRole">Job Role:</label>
              <input
                type="text"
                id="jobRole"
                value={searchJobRole}
                onChange={(e) => setSearchJobRole(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </section>
          <section className="candidate-list-section">
            <h2>Candidate List</h2>
            <ul>
              {candidates.map((candidate) => (
                <li key={candidate.id}>
                  <h3>{candidate.name}</h3>
                  <p>Location: {candidate.location}</p>
                  <p>Job Role: {candidate.jobRole}</p>
                </li>
              ))}
            </ul>
          </section>
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
