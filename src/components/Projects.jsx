import React from 'react';
import './Section.css';

const Projects = () => {
  const projects = [
    {
      name: "SUDA – Property Survey Application",
      client: "Chhattisgarh Government",
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
      points: [
        "Developed a feature-rich cab booking app from the ground up using React Native.",
        "Leveraged Redux for state management, async/await with Axios for APIs, and SQLite for offline data persistence.",
        "Delivered secure booking history, quick re-booking, and smooth user experience across multiple locations.",
        "Optimized codebase using modular design and React Native best practices, delivering a reliable experience for 500+ active users across 50+ locations."
      ]
    },
    {
      name: "Music Sync App",
      tech: "Kotlin, Jetpack Compose",
      points: [
        "Built modern Android app with MVVM + Single-Activity architecture.",
        "Developed real-time playback sync via broadcast/notification system & foreground service.",
        "Integrated MediaSession + NotificationManager for lock-screen & rich media controls.",
        "Used Jetpack libraries (Room, Paging, WorkManager, Navigation, LiveData) for scalable design."
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <div className="section-content">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              {project.client && <span className="project-client">— {project.client}</span>}
              {project.tech && <span className="project-tech">{project.tech}</span>}
            </div>
            <ul className="project-list">
              {project.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

