import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';

function HomeScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/setup');
  };

  return (
    <div className="container home-container">
      <img
        src="/images/kukufmLogo.jpeg" 
        alt="Kuku Navigator Icon"
        className="logo"
      />
      <h1>Kuku Navigator</h1>
      <p>Discover stories that speak to you—with audio, visuals, and special offers!</p>
      <button onClick={handleStart}>Begin Your Journey</button>
    </div>
  );
}

export default HomeScreen;
