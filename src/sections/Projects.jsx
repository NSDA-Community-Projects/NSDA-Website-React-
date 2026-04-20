import React from 'react';
import { projects } from '../data/projects';

function Project() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Our Projects</h1>

      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        
        {projects.map((project) => (
          <div key={project.id} style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            width: '250px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '40px' }}>{project.icon}</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <small>{project.tech}</small>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Project;