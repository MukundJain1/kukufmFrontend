import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './InteractiveExperience.css';

function InteractiveExperience() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mood, genre } = location.state || { mood: 'Relaxed', genre: 'Mystery' };
  const [storyData, setStoryData] = useState(null);
  const [coupon, setCoupon] = useState(null);
  const [showCoupon, setShowCoupon] = useState(false);
  const [audio] = useState(new Audio());

  useEffect(() => {
    axios.post('https://kukufm-backend-9n7e.onrender.com/api/story', { mood, genre })
      .then(response => {
        console.log('Response data:', response.data);
        setStoryData(response.data);
        audio.src = response.data.audio_url;
      })
      .catch(err => console.error('Error fetching story:', err));

    const timer = setTimeout(() => {
      axios.get('https://kukufm-backend-9n7e.onrender.com/api/coupon')
        .then(response => {
          setCoupon(response.data);
          setShowCoupon(true);
        })
        .catch(err => console.error('Error fetching coupon:', err));
    }, 10000);

    return () => clearTimeout(timer);
  }, [mood, genre, audio]);

  const handlePlay = () => {
    audio.play();
  };

  const handlePause = () => {
    audio.pause();
  };

  const handleFeedback = () => {
    navigate('/feedback');
  };

  return (
    <div className="container">
      <h2>Your Story Journey</h2>
      {storyData ? (
        <>
          <p>{storyData.story}</p>
          <div className="audio-controls">
            <button onClick={handlePlay}>Play Audio</button>
            <button onClick={handlePause}>Pause Audio</button>
          </div>
          <div className="comic-image">
            <img src={storyData.comic_image_url} alt="Comic Visual" />
          </div>
          <div className="choice-buttons">
            <button onClick={() => alert('You chose: Explore the Forest')}>
              Explore the Forest
            </button>
            <button onClick={() => alert('You chose: Visit the City')}>
              Visit the City
            </button>
          </div>
          {showCoupon && coupon && (
            <div className="coupon-banner">
              <p>Special Offer: {coupon.discount} off!</p>
              <p>Coupon Code: {coupon.code}</p>
              <p>Expires in 5 minutes</p>
            </div>
          )}
          <button onClick={handleFeedback}>Finish and Give Feedback</button>
        </>
      ) : (
        <p>Loading your personalized story...</p>
      )}
    </div>
  );
}

export default InteractiveExperience;
