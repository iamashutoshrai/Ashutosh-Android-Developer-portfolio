import React, { useEffect, useRef, useState } from 'react';
import './Section.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="section about-section" ref={sectionRef}>
      <h2 
        className="section-title"
        ref={titleRef}
        style={{
          animation: titleVisible ? 'fadeInLeft 0.6s ease-out forwards' : 'none',
          opacity: titleVisible ? 1 : 0
        }}
      >
        About Me
      </h2>
      <div className="section-content">
        <div className="about-content">
          <div 
            className="android-focus"
            style={{
              animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
              opacity: isVisible ? 1 : 0
            }}
          >
            <div className="focus-icon">🚀</div>
            <h3 className="focus-title">Passionate Android Developer</h3>
            <p className="focus-description">
              I'm deeply passionate about Android development and creating exceptional mobile experiences. 
              With expertise in Kotlin, Jetpack Compose, and modern Android architecture patterns, I build 
              scalable, performant applications that users love.
            </p>
          </div>
          <div className="passion-points">
            <div 
              className="passion-item"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 0.1s forwards' : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
              <span className="passion-icon">⚡</span>
              <div>
                <h4>Performance Optimization</h4>
                <p>Reduced crash rates by 25% and improved responsiveness by 40% through systematic optimization</p>
              </div>
            </div>
            <div 
              className="passion-item"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s forwards' : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
              <span className="passion-icon">🏗️</span>
              <div>
                <h4>Clean Architecture</h4>
                <p>Building maintainable apps using MVVM, Clean Architecture, and Jetpack libraries</p>
              </div>
            </div>
            <div 
              className="passion-item"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 0.3s forwards' : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
              <span className="passion-icon">🎨</span>
              <div>
                <h4>Modern UI/UX</h4>
                <p>Creating beautiful, intuitive interfaces with Jetpack Compose and Material Design</p>
              </div>
            </div>
            <div 
              className="passion-item"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s ease-out 0.4s forwards' : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
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

