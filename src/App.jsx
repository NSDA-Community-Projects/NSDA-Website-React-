import React from 'react';
import './index.css';
import Form from './components/Form';
import Footer from './components/Footer';
import CTA from './components/CTA';

function App() {
  return (
    <main>
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: 'var(--cloud-break)',
        minHeight: '200px'
      }}>
        <h1 style={{ color: 'var(--prussian-blue)' }}>NSDA Website</h1>
        <p>Under construction - Team members adding sections</p>
      </div>
      
      <Form />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;