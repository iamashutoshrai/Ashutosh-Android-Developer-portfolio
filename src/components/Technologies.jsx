import React from 'react';
import './Section.css';

const Technologies = () => {
  const techCategories = [
    {
      title: "Android Development",
      items: "Kotlin, Jetpack Compose, Android SDK, LiveData, ViewModel, Room, SQLite, RESTful APIs, Clean Architecture, MVVM, App Optimization & Security."
    },
    {
      title: "Programming Languages",
      items: "C++, C, Java, SQL, JavaScript, Dart, Kotlin"
    },
    {
      title: "Mobile Development",
      items: "React Native, Flutter, Android (Java/kotlin/Jetpack Compose)"
    },
    {
      title: "Backend Development",
      items: "Node.js, Express.js, MongoDb, JDBC."
    },
    {
      title: "Technical Skills",
      items: "Analytical problem-solving, Data Structure & Algorithm, Git, Gitlab."
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Technologies & Skills</h2>
      <div className="section-content">
        {techCategories.map((category, index) => (
          <div 
            key={index} 
            className={`tech-category ${category.title === "Android Development" ? "android-tech" : ""}`}
          >
            <h3 className="tech-title">
              {category.title === "Android Development" && <span className="android-badge-small">🤖</span>}
              {category.title}
            </h3>
            <p className="tech-items">{category.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

