import React from 'react';
import './styles/global.css';
import Home from './pages/Home';
import Project from './sections/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;