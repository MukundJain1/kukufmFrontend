import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import PersonalizationSetup from './components/PersonalizationSetup';
import InteractiveExperience from './components/InteractiveExperience';
import PostExperienceDashboard from './components/PostExperienceDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/setup" element={<PersonalizationSetup />} />
        <Route path="/experience" element={<InteractiveExperience />} />
        <Route path="/feedback" element={<PostExperienceDashboard />} />
        <Route path="*" element={<div className="not-found">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
