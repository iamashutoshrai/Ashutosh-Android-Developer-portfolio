import React from 'react';
import './Section.css';

const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="experience-role">Associate Software Engineer (Android Developer)</h3>
            <span className="experience-company">MapmyIndia (C.E.Infosystem Pvt Ltd)</span>
          </div>
          <span className="experience-date">Jan 2024 – Current</span>
          <ul className="experience-list">
            <li>Built and maintained scalable enterprise Android apps using Java, Kotlin, Jetpack Compose, MVVM, and Clean Architecture & Collaborated with cross-functional teams to design and implement new features.</li>
            <li>Applied best practices, code reviews, and Android trends to ensure reliable, maintainable code.</li>
            <li>Collaborated closely with Product, QA, Design, and Backend teams to ship features and integrate RESTful APIs.</li>
            <li>Optimized app performance, resolving ANRs & reducing crash rate by 25%, while boosting responsiveness by 40%.</li>
            <li>Integrated third-party SDKs (Firebase, Map APIs, QR scanners) to enable modern, secure app features.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

