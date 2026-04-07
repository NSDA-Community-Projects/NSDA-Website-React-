import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const fieldsOfStudy = [
  'Computer Science',
  'Software Engineering',
  'Information Technology',
  'Data Science',
  'Cybersecurity',
  'Other'
];

const universities = [
  'Addis Ababa University',
  'Addis Ababa Science and Technology University',
  'Bahir Dar University',
  'Jimma University',
  'Mekelle University',
  'Haramaya University',
  'Debre Berhan University',
  'Wolaita Sodo University',
  'Other'
];

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telegram: '',
    university: '',
    fieldOfStudy: '',
    reason: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      fullName: '',
      email: '',
      telegram: '',
      university: '',
      fieldOfStudy: '',
      reason: ''
    });
    
    setTimeout(() => {
      const successDiv = document.getElementById('success-message');
      if (successDiv) {
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };
  
  return (
    <SectionWrapper id="register" backgroundColor="cloud">
      <div style={{ maxWidth: '650px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--prussian-blue)' }}>Empowering Muslim student developers to achieve technical excellence through faith-centered collaboration.</h2>
          <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
            Join 200+ developers building for the Ummah.
          </p>
        </div>
        
        {submitted ? (
          <div id="success-message" style={{
            backgroundColor: 'var(--gold)',
            color: 'var(--prussian-blue)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center'
          }}>
            <h3>🎉 Welcome to NSDA!</h3>
            <p>We'll contact you soon on Telegram with next steps.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}>
            {/* Full Name */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="fullName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                FULL NAME *
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Johnathan Smith"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            {/* Email */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                EMAIL ADDRESS *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="johnt@example.com"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* Telegram Username */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="telegram" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                TELEGRAM USERNAME *
              </label>
              <input
                id="telegram"
                type="text"
                name="telegram"
                required
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@username"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            {/* University */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="university" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                UNIVERSITY / ORGANIZATION *
              </label>
              <select
                id="university"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Select your university</option>
                {universities.map((uni) => (
                  <option key={uni} value={uni}>{uni}</option>
                ))}
              </select>
            </div>
            
            {/* Field of Study */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="fieldOfStudy" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                FIELD OF STUDY *
              </label>
              <select
                id="fieldOfStudy"
                name="fieldOfStudy"
                required
                value={formData.fieldOfStudy}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Select your field</option>
                {fieldsOfStudy.map((field) => (
                  <option key={field} value={field}>{field}</option>
                ))}
              </select>
            </div>
            
            {/* Reason */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="reason" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                WHY DO YOU WANT TO JOIN NSDA? *
              </label>
              <textarea
                id="reason"
                name="reason"
                required
                rows="4"
                value={formData.reason}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                placeholder="Share what excites you about joining NSDA..."
              />
            </div>
            
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'var(--prussian-blue)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--gold)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--prussian-blue)'}
            >
              Join NSDA Now
            </button>
            
            <p style={{ textAlign: 'center', fontSize: '0.75rem', marginTop: '1rem', color: '#999' }}>
              We'll contact you on Telegram after review
            </p>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}