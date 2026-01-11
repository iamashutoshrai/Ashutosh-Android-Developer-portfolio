import React, { useEffect, useRef, useState } from 'react';
import './Section.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [listItemsVisible, setListItemsVisible] = useState([]);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const listItemRefs = useRef([]);

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
          // Animate list items after card appears
          setTimeout(() => {
            setListItemsVisible([0, 1, 2, 3, 4]);
          }, 300);
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

  const experiencePoints = [
    "Built and maintained scalable enterprise Android apps using Java, Kotlin, Jetpack Compose, MVVM, and Clean Architecture & Collaborated with cross-functional teams to design and implement new features.",
    "Applied best practices, code reviews, and Android trends to ensure reliable, maintainable code.",
    "Collaborated closely with Product, QA, Design, and Backend teams to ship features and integrate RESTful APIs.",
    "Optimized app performance, resolving ANRs & reducing crash rate by 25%, while boosting responsiveness by 40%.",
    "Integrated third-party SDKs (Firebase, Map APIs, QR scanners) to enable modern, secure app features."
  ];

  return (
    <section className="section" ref={sectionRef}>
      <h2 
        className="section-title"
        style={{
          animation: isVisible ? 'fadeInLeft 0.6s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        Experience
      </h2>
      <div className="section-content">
        <div 
          className="experience-item"
          ref={cardRef}
          style={{
            animation: cardVisible ? 'slideInUp 0.6s ease-out forwards' : 'none',
            opacity: cardVisible ? 1 : 0
          }}
        >
          <div className="experience-header">
            <h3 className="experience-role">Associate Software Engineer (Android Developer)</h3>
            <span className="experience-company">MapmyIndia (C.E.Infosystem Pvt Ltd)</span>
          </div>
          <span className="experience-date">Jan 2024 – Current</span>
          <ul className="experience-list">
            {experiencePoints.map((point, index) => (
              <li 
                key={index}
                ref={el => listItemRefs.current[index] = el}
                style={{
                  animation: listItemsVisible.includes(index) ? `fadeInUp 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                  opacity: listItemsVisible.includes(index) ? 1 : 0
                }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

