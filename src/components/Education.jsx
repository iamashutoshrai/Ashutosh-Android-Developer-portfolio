import React, { useEffect, useRef, useState } from 'react';
import './Section.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const cardObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (cardRef.current) {
      cardObserver.observe(cardRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      if (cardRef.current) {
        cardObserver.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <section className="section" ref={sectionRef}>
      <h2 
        className="section-title"
        style={{
          animation: isVisible ? 'fadeInLeft 0.6s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        Education
      </h2>
      <div className="section-content">
        <div 
          className="education-item"
          ref={cardRef}
          style={{
            animation: cardVisible ? 'slideInUp 0.6s ease-out forwards' : 'none',
            opacity: cardVisible ? 1 : 0
          }}
        >
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

