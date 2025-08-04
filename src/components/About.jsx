import React from 'react';
import './Styles.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            From humble beginnings to digital innovation leadership
          </p>
        </div>
        <div className="about-content">
          <div className="about-text fade-in">
            <h3>From Data Entry to Digital Innovation</h3>
            <p>
              What started as a simple data entry job in 2020 has evolved into a passion-driven
              technology company. Our founder's journey from processing information to creating
              digital solutions reflects our commitment to growth, learning, and excellence.
            </p>
            <p>
              Today, Vitalisyshak Tech stands as a testament to the power of persistence and
              innovation. We believe in transforming not just code, but entire business paradigms
              through thoughtful technology solutions.
            </p>
            <h3>Our Mission</h3>
            <p>
              To empower businesses with cutting-edge digital solutions that drive growth, enhance
              user experiences, and create lasting technological impact.
            </p>
          </div>
          <div className="timeline fade-in-delay-1">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-title">The Beginning</div>
              <p>Started with data entry work, discovering passion for technology</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-title">Learning Phase</div>
              <p>Intensive learning of web development and programming languages</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-title">First Clients</div>
              <p>Successfully delivered first web development projects</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-title">Company Launch</div>
              <p>Official launch of Vitalisyshak Tech Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
