import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [shapes, setShapes] = useState([]);
  const [particles, setParticles] = useState([]);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Create floating shapes
    const shapesArray = Array.from({ length: 20 }, (_, i) => ({
      id: `shape-${i}`,
      size: Math.random() * 120 + 60,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 25 + 20,
      type: Math.random() > 0.5 ? 'circle' : 'square'
    }));

    // Create background particles
    const particlesArray = Array.from({ length: 50 }, (_, i) => ({
      id: `particle-${i}`,
      size: Math.random() * 5 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 25 + 20
    }));

    // Create floating tech icons
    const iconsArray = ['📱', '🤖', '⚡', '💻', '🚀', '🎯', '🔧', '📦', '⚙️', '🎨'];
    const iconsPositions = Array.from({ length: 10 }, (_, i) => ({
      id: `icon-${i}`,
      icon: iconsArray[i],
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 30 + 25,
      size: Math.random() * 20 + 30
    }));

    setShapes(shapesArray);
    setParticles(particlesArray);
    setIcons(iconsPositions);
  }, []);

  return (
    <div className="animated-background">
      {/* Floating shapes */}
      {shapes.map(shape => (
        <div
          key={shape.id}
          className={`bg-shape bg-shape-${shape.type}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`
          }}
        />
      ))}
      
      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="bg-particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}

      {/* Floating tech icons */}
      {icons.map(icon => (
        <div
          key={icon.id}
          className="bg-icon"
          style={{
            left: `${icon.left}%`,
            top: `${icon.top}%`,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
            fontSize: `${icon.size}px`
          }}
        >
          {icon.icon}
        </div>
      ))}

      {/* Grid pattern overlay */}
      <div className="bg-grid"></div>
      
      {/* Animated lines */}
      <div className="bg-line line-1"></div>
      <div className="bg-line line-2"></div>
      <div className="bg-line line-3"></div>
      <div className="bg-line line-4"></div>

      {/* Code-like elements */}
      <div className="bg-code code-1">{'{'}</div>
      <div className="bg-code code-2">{'}'}</div>
      <div className="bg-code code-3">{'<'}</div>
      <div className="bg-code code-4">{'>'}</div>
    </div>
  );
};

export default AnimatedBackground;

