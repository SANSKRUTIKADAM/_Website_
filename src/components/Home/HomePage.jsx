import React from 'react';
import "../Home/HomePage.css"

const HomePage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Streamline Your Hiring Process with our Online Recruitment Solution</h1>
        <p>Efficiency and Simplicity for Hiring Managers and HR Professionals</p>
      </header>
      <section className="feature-section">
        <div className="feature">
          <img src="feature-1.png" alt="Feature 1" />
          <h2>Automated Applicant Tracking</h2>
          <p>Our solution uses advanced algorithms to automatically track and organize all applicants, saving you time and effort.</p>
        </div>
        <div className="feature">
          <img src="feature-2.png" alt="Feature 2" />
          <h2>Customizable Job Listings</h2>
          <p>Create attractive job listings with ease. Customize the layout, colors, and branding to match your company's style.</p>
        </div>
        <div className="feature">
          <img src="feature-3.png" alt="Feature 3" />
          <h2>Effortless Candidate Screening</h2>
          <p>Quickly filter and screen candidates based on your specific requirements. Our intelligent system analyzes resumes and profiles to identify the best matches.</p>
        </div>
      </section>
      <section className="benefit-section">
        <h2>Benefits of our Online Recruitment Solution</h2>
        <div className="benefit">
          <img src="benefit-1.png" alt="Benefit 1" />
          <h3>Saves Time and Effort</h3>
          <p>Automate repetitive tasks and eliminate manual paperwork, allowing you to focus on finding the right candidates.</p>
        </div>
        <div className="benefit">
          <img src="benefit-2.png" alt="Benefit 2" />
          <h3>Increase Hiring Efficiency</h3>
          <p>Streamline your hiring process with intuitive workflows and collaboration tools, reducing time-to-hire and improving productivity.</p>
        </div>
        <div className="benefit">
          <img src="benefit-3.png" alt="Benefit 3" />
          <h3>Access to a Large Talent Pool</h3>
          <p>Expand your reach and attract top talent with our platform, which integrates with popular job boards and social media channels.</p>
        </div>
      </section>
      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>Sign up now to revolutionize your hiring process and find the best candidates for your company.</p>
        <button className="cta-button">Sign Up</button>
      </section>
    </div>
  );
};

export default HomePage;
