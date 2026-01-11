import React from 'react';
import './Section.css';

const Education = () => {
  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      <div className="section-content">
        <div className="education-item">
          <div className="education-header">
            <h3 className="education-institution">Sarala Birla University</h3>
            <span className="education-date">Sept 2020 – May 2024</span>
          </div>
          <p className="education-degree">BTech in Computer Science & Engineering</p>
        </div>
      </div>
    </section>
  );
};

export default Education;

