import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PostExperienceDashboard.css';

function PostExperienceDashboard() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://kukufm-backend-9n7e.onrender.com/feedback', { feedback })
      .then(response => {
        alert('Feedback submitted. Thank you!');
        navigate('/');
      })
      .catch(err => console.error('Error submitting feedback:', err));
  };

  return (
    <div className="container">
      <h2>Rate Your Journey</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Leave your feedback here..."
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
      <div className="rewards">
        <h3>Your Rewards</h3>
        <p>You earned the "Explorer Badge"!</p>
        <button onClick={() => alert('Shared on social media!')}>Share Your Journey</button>
      </div>
    </div>
  );
}

export default PostExperienceDashboard;
