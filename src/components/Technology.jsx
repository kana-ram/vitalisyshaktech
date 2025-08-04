import React from 'react';
import './Styles.css';

const Technology = () => {
  return (
    <section id="technology" className="section technology">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle">
            Cutting-edge technologies powering our solutions
          </p>
        </div>
        <div className="tech-grid">
          <div className="tech-item fade-in">
            <div className="tech-icon">
              <i className="fab fa-react"></i>
            </div>
            <div className="tech-name">React</div>
          </div>
          <div className="tech-item fade-in-delay-1">
            <div className="tech-icon">
              <i className="fab fa-node-js"></i>
            </div>
            <div className="tech-name">Node.js</div>
          </div>
          <div className="tech-item fade-in-delay-2">
            <div className="tech-icon">
              <i className="fab fa-python"></i>
            </div>
            <div className="tech-name">Python</div>
          </div>
          <div className="tech-item fade-in">
            <div className="tech-icon">
              <i className="fas fa-database"></i>
            </div>
            <div className="tech-name">MongoDB</div>
          </div>
          <div className="tech-item fade-in-delay-1">
            <div className="tech-icon">
              <i className="fab fa-aws"></i>
            </div>
            <div className="tech-name">AWS</div>
          </div>
          <div className="tech-item fade-in-delay-2">
            <div className="tech-icon">
              <i className="fas fa-fire"></i>
            </div>
            <div className="tech-name">Firebase</div>
          </div>
          <div className="tech-item fade-in">
            <div className="tech-icon">
              <i className="fab fa-flutter"></i>
            </div>
            <div className="tech-name">Flutter</div>
          </div>
          <div className="tech-item fade-in-delay-1">
            <div className="tech-icon">
              <i className="fab fa-docker"></i>
            </div>
            <div className="tech-name">Docker</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
