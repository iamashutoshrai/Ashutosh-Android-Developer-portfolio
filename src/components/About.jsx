import React from 'react';
import './Section.css';

const About = () => {
  return (
    <section className="section about-section">
      <h2 className="section-title">About Me</h2>
      <div className="section-content">
        <div className="about-content">
          <div className="android-focus">
            <div className="focus-icon">🚀</div>
            <h3 className="focus-title">Passionate Android Developer</h3>
            <p className="focus-description">
              I'm deeply passionate about Android development and creating exceptional mobile experiences. 
              With expertise in Kotlin, Jetpack Compose, and modern Android architecture patterns, I build 
              scalable, performant applications that users love.
            </p>
          </div>
          <div className="passion-points">
            <div className="passion-item">
              <span className="passion-icon">⚡</span>
              <div>
                <h4>Performance Optimization</h4>
                <p>Reduced crash rates by 25% and improved responsiveness by 40% through systematic optimization</p>
              </div>
            </div>
            <div className="passion-item">
              <span className="passion-icon">🏗️</span>
              <div>
                <h4>Clean Architecture</h4>
                <p>Building maintainable apps using MVVM, Clean Architecture, and Jetpack libraries</p>
              </div>
            </div>
            <div className="passion-item">
              <span className="passion-icon">🎨</span>
              <div>
                <h4>Modern UI/UX</h4>
                <p>Creating beautiful, intuitive interfaces with Jetpack Compose and Material Design</p>
              </div>
            </div>
            <div className="passion-item">
              <span className="passion-icon">🔧</span>
              <div>
                <h4>Best Practices</h4>
                <p>Following Android best practices, code reviews, and staying updated with latest trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

