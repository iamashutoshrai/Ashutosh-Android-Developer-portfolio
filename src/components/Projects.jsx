import React, { useEffect, useRef, useState } from 'react';
import './Section.css';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer && observer.disconnect());
    };
  }, []);

  const projects = [
    {
      name: "SUDA – Property Survey Application",
      client: "Chhattisgarh Government",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "WorkManager", "ML Kit"],
      icon: "🏛️",
      points: [
        "Designed and developed the entire UI, ensuring a seamless user experience.",
        "Developed login authentication, dynamic forms, ML Kit QR scanning, search filters, and image upload features.",
        "Used Compose with MVVM + Clean Architecture for a scalable, efficient codebase.",
        "Implemented background tasks with WorkManager—receipt downloads, notifications—ensuring reliability across restarts."
      ]
    },
    {
      name: "BYD Navigation App",
      client: "Mappls Map",
      tech: ["Kotlin", "Android SDK", "Mappls Auto SDK", "StateFlow", "Coroutines", "ViewModel"],
      icon: "🚗",
      points: [
        "Delivered navigation features for BYD infotainment systems (Sealion 7), integrating Mappls Auto SDK.",
        "Resolved ANRs & improved UI responsiveness by profiling & optimizing custom view rendering & heavy layout operations.",
        "Handled and screen transitions using stateFlow, kotlin coroutines, and ViewModel-driven architecture.",
        "Synced app behavior with vehicle-state events for reliable performance on production hardware."
      ]
    },
    {
      name: "KTC Customer App",
      client: "Mappls Map App Link",
      tech: ["React Native", "Redux", "Axios", "SQLite", "JavaScript"],
      icon: "🚕",
      points: [
        "Developed a feature-rich cab booking app from the ground up using React Native.",
        "Leveraged Redux for state management, async/await with Axios for APIs, and SQLite for offline data persistence.",
        "Delivered secure booking history, quick re-booking, and smooth user experience across multiple locations.",
        "Optimized codebase using modular design and React Native best practices, delivering a reliable experience for 500+ active users across 50+ locations."
      ]
    },
    {
      name: "Music Sync App",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "WorkManager", "MediaSession"],
      icon: "🎵",
      points: [
        "Built modern Android app with MVVM + Single-Activity architecture.",
        "Developed real-time playback sync via broadcast/notification system & foreground service.",
        "Integrated MediaSession + NotificationManager for lock-screen & rich media controls.",
        "Used Jetpack libraries (Room, Paging, WorkManager, Navigation, LiveData) for scalable design."
      ]
    }
  ];

  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

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
    <section className="section" ref={sectionRef}>
      <h2 
        className="section-title"
        ref={titleRef}
        style={{
          animation: titleVisible ? 'fadeInLeft 0.6s ease-out forwards' : 'none',
          opacity: titleVisible ? 1 : 0
        }}
      >
        Projects
      </h2>
      <div className="section-content">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-item"
            ref={el => projectRefs.current[index] = el}
            style={{
              animation: visibleProjects.includes(index) ? 'fadeInUp 0.6s ease-out forwards' : 'none',
              opacity: visibleProjects.includes(index) ? 1 : 0
            }}
          >
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div>
                <h3 className="project-name">{project.name}</h3>
                {project.client && <span className="project-client">— {project.client}</span>}
              </div>
            </div>
            <div className="project-tech-badges">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="project-tech-badge">{tech}</span>
              ))}
            </div>
            <ul className="project-list">
              {project.points.map((point, pointIndex) => (
                <li 
                  key={pointIndex}
                  style={{
                    animation: visibleProjects.includes(index) ? `fadeInUp 0.5s ease-out ${(pointIndex * 0.1) + 0.3}s forwards` : 'none',
                    opacity: visibleProjects.includes(index) ? 1 : 0
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

