import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../rinsight_logo.png'; // Make sure the path to your image is correct
import '../styling/LandingScreen.css';

const reviewImage = '/images/reviews.jpg'; // Assuming create-react-app public directory structure
const mapImage = '/images/map.png'; // Assuming create-react-app public directory structure


const LandingPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home'); // Navigate to the HomeScreen of the Reviews
  };

  // Placeholder function for navigating to the map page (to be implemented later)
  const goToMap = () => {
    navigate('/map'); // This should match the route you set for your map screen
  };

  return (
    <div className="landing-page">
      <div className="split-screen">
        <div className="left-half" onClick={goToMap} style={{ backgroundImage: `url(${mapImage})` }}>
          {/* Left half will be interactive and will navigate to the map page */}
        </div>
        <div className="right-half" onClick={goToHome} style={{ backgroundImage: `url(${reviewImage})` }}>
          {/* Right half will be interactive and will navigate to the HomeScreen */}
        </div>
      </div>
      <div className="centered-content text-center">
        <img src={logoImage} alt="R'Insight Logo" />
        <h1>Welcome to R'Insight</h1>
        <p>Discover the best housing options on campus, reviewed by students for students.</p>
      </div>
    </div>
  );
};

export default LandingPage;
