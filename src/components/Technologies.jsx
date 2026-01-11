import React, { useEffect, useRef, useState } from 'react';
import './Section.css';

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const cardObservers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      cardObservers.forEach(observer => observer && observer.disconnect());
    };
  }, []);

  const techCategories = [
    {
      title: "Android Development",
      items: ["Kotlin", "Jetpack Compose", "Android SDK", "LiveData", "ViewModel", "Room", "SQLite", "RESTful APIs", "Clean Architecture", "MVVM", "App Optimization", "Security"]
    },
    {
      title: "Programming Languages",
      items: ["C++", "C", "Java", "SQL", "JavaScript", "Dart", "Kotlin"]
    },
    {
      title: "Mobile Development",
      items: ["React Native", "Flutter", "Android (Java/Kotlin/Jetpack Compose)"]
    },
    {
      title: "Backend Development",
      items: ["Node.js", "Express.js", "MongoDB", "JDBC"]
    },
    {
      title: "Technical Skills",
      items: ["Analytical Problem-solving", "Data Structures & Algorithms", "Git", "GitLab", "Code Reviews", "CI/CD"]
    }
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
        Technologies & Skills
      </h2>
      <div className="section-content">
        {techCategories.map((category, index) => (
          <div 
            key={index} 
            className={`tech-category ${category.title === "Android Development" ? "android-tech" : ""}`}
            ref={el => cardRefs.current[index] = el}
            style={{
              animation: visibleCards.includes(index) ? `slideInUp 0.6s ease-out ${index * 0.1}s forwards` : 'none',
              opacity: visibleCards.includes(index) ? 1 : 0
            }}
          >
            <h3 className="tech-title">
              {category.title === "Android Development" && <span className="android-badge-small">🤖</span>}
              {category.title}
            </h3>
            <div className="tech-items">
              {category.items.map((item, itemIndex) => (
                <span key={itemIndex} className="tech-item-badge">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

