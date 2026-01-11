import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Stats from './components/Stats';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <div className="container">
        <Header />
        <About />
        <Stats />
        <Education />
        <Experience />
        <Projects />
        <Technologies />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;

