import React, { useMemo } from 'react';
import './Header.css';

const Header = () => {
  // Memoize particles to avoid recalculation on re-renders
  const particles = useMemo(() => {
    // Reduced from 30 to 15 particles for better performance
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      delay: Math.random() * 15 + 's',
      duration: Math.random() * 10 + 10 + 's',
      size: Math.random() * 4 + 4 + 'px'
    }));
  }, []);

  return (
    <header className="header">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            width: particle.size,
            height: particle.size
          }}
        />
      ))}
      {/* Animated floating shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
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
            💼 LinkedIn
          </a>
          <a href="https://github.com/Ashut0shRai12002" target="_blank" rel="noopener noreferrer" className="social-link">
            💻 Github
          </a>
          <a href="https://leetcode.com/u/ashutoshrai126/" target="_blank" rel="noopener noreferrer" className="social-link">
            🧩 Leetcode
          </a>
          <a href="/resume_enhanced.tex" download="Ashutosh_Rai_Resume.pdf" className="social-link resume-link">
            📄 Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

