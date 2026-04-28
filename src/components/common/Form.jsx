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
      <div className="form-container">
        <div className="form-header">
          <h2>Become a Member. Serve the Ummah.</h2>
          <p>Be part of something bigger. Join NSDA to connect with fellow Muslim developers, build impactful projects, and grow your skills in a faith-centered community.</p>
        </div>
        
        {submitted ? (
          <div id="success-message" className="success-message">
            <h3>🎉 Welcome to NSDA!</h3>
            <p>We'll contact you soon on Telegram with next steps.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-box">
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">FULL NAME *</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="form-input"
              />
            </div>
            
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">EMAIL ADDRESS *</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="form-input"
              />
            </div>

            {/* Telegram Username */}
            <div className="form-group">
              <label htmlFor="telegram" className="form-label">TELEGRAM USERNAME *</label>
              <input
                id="telegram"
                type="text"
                name="telegram"
                required
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@yourusername"
                className="form-input"
              />
            </div>
            
            {/* University */}
            <div className="form-group">
              <label htmlFor="university" className="form-label">UNIVERSITY / ORGANIZATION *</label>
              <select
                id="university"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select your university</option>
                {universities.map((uni) => (
                  <option key={uni} value={uni}>{uni}</option>
                ))}
              </select>
            </div>
            
            {/* Field of Study */}
            <div className="form-group">
              <label htmlFor="fieldOfStudy" className="form-label">FIELD OF STUDY *</label>
              <select
                id="fieldOfStudy"
                name="fieldOfStudy"
                required
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select your field of study</option>
                {fieldsOfStudy.map((field) => (
                  <option key={field} value={field}>{field}</option>
                ))}
              </select>
            </div>
            
            {/* Reason */}
            <div className="form-group">
              <label htmlFor="reason" className="form-label">WHY DO YOU WANT TO JOIN NSDA? *</label>
              <textarea
                id="reason"
                name="reason"
                required
                rows="4"
                value={formData.reason}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Share your vision for using tech to serve the Ummah..."
              />
            </div>
            
            <button type="submit" className="btn-submit">
              Join NSDA Now
            </button>
            
            <p className="form-note">
              We'll contact you on Telegram after review.
            </p>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}