import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="android-badge">🤖 Android Developer</div>
      <div className="header-content">
        <div className="android-icon">📱</div>
        <h1 className="name">Ashutosh Rai</h1>
        <p className="title">Passionate Android Developer</p>
        <p className="subtitle">Building scalable, performant mobile experiences with Kotlin & Jetpack Compose</p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>New Delhi, India</span>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <a href="mailto:ashutoshrai126@gmail.com">ashutoshrai126@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="icon">📱</span>
            <a href="tel:+917488457169">+91-7488457169</a>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ashut0shrai/" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://github.com/Ashut0shRai12002" target="_blank" rel="noopener noreferrer" className="social-link">
            Github
          </a>
          <a href="https://leetcode.com/u/ashutoshrai126/" target="_blank" rel="noopener noreferrer" className="social-link">
            Leetcode
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

