import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
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
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      fullName: '',
      email: '',
      university: '',
      fieldOfStudy: '',
      reason: ''
    });
  };
  
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
  
  return (
    <SectionWrapper id="register" backgroundColor="cloud">
      <div style={{ maxWidth: '650px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--prussian-blue)' }}>Join NSDA</h2>
          <p>Be part of a nationwide community of Muslim developers</p>
        </div>
        
        {submitted ? (
          <div style={{
            backgroundColor: 'var(--gold)',
            color: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center'
          }}>
            <h3>🎉 Thank You for Joining!</h3>
            <p>We'll contact you soon on Telegram with next steps.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
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
            
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
            </div>
            
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                University *
              </label>
              <select
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
            
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                Field of Study *
              </label>
              <select
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
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--prussian-blue)' }}>
                Why do you want to join NSDA? *
              </label>
              <textarea
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
                border: 'none'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--gold)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--prussian-blue)'}
            >
              Join NSDA
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
