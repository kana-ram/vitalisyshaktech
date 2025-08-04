import React from 'react';
import './Styles.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content fade-in">
          <h1>Transforming Ideas into Digital Reality</h1>
          <p>
            We craft exceptional digital experiences through innovative web development,
            mobile apps, and cutting-edge technology solutions that drive your business forward.
          </p>
          <a href="#contact" className="cta-button">
            Let's Work Together <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="hero-image fade-in-delay-1">
          <div className="hero-illustration">
            <i className="fas fa-code"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
