import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Technologies />
      </div>
    </div>
  );
}

export default App;

