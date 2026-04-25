import React from 'react';
import './styles/global.css';
import Home from './pages/Home';
import LeadershipProfile from './pages/LeadershipProfile';

function App() {
  const path = window.location.pathname;

  if (path.startsWith('/leadership/')) {
    const memberId = path.replace('/leadership/', '').trim();
    return <LeadershipProfile memberId={memberId} />;
  }

  return <Home />;
}

export default App;
