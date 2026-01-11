import React, { useEffect, useRef, useState } from 'react';
import './Section.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    { number: '25%', label: 'Crash Rate Reduction', icon: '📉', color: '#34a853' },
    { number: '40%', label: 'Performance Improvement', icon: '⚡', color: '#3ddc84' },
    { number: '500+', label: 'Active Users', icon: '👥', color: '#0f9d58' },
    { number: '4+', label: 'Major Projects', icon: '🚀', color: '#34a853' }
  ];

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
    <section className="section stats-section" ref={statsRef}>
      <h2 
        className="section-title"
        ref={titleRef}
        style={{
          animation: titleVisible ? 'fadeInLeft 0.6s ease-out forwards' : 'none',
          opacity: titleVisible ? 1 : 0
        }}
      >
        Key Achievements
      </h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-card"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
              opacity: isVisible ? 1 : 0
            }}
          >
            <div className="stat-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-number" style={{ color: stat.color }}>
              {stat.number}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

