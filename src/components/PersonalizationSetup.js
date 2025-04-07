import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalizationSetup.css';

function PersonalizationSetup() {
  const navigate = useNavigate();
  const [mood, setMood] = useState('Relaxed');
  const [genre, setGenre] = useState('Mystery');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/experience', { state: { mood, genre } });
  };

  return (
    <div className="container">
      <h2>Personalize Your Experience</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mood: </label>
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="Relaxed">Relaxed</option>
            <option value="Excited">Excited</option>
            <option value="Curious">Curious</option>
          </select>
        </div>
        <div>
          <label>Genre: </label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="Mystery">Mystery</option>
            <option value="Adventure">Adventure</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default PersonalizationSetup;
