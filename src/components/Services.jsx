import React from 'react';
import './Styles.css';

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card fade-in">
            <div className="service-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3>Web Development</h3>
            <p>
              Modern, responsive websites built with latest technologies and best practices
              for optimal performance and user experience.
            </p>
          </div>
          <div className="service-card fade-in-delay-1">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile App Development</h3>
            <p>
              Native and cross-platform mobile applications that deliver seamless experiences
              across iOS and Android devices.
            </p>
          </div>
          <div className="service-card fade-in-delay-2">
            <div className="service-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>UI/UX Design</h3>
            <p>
              User-centered design solutions that combine aesthetics with functionality to
              create engaging digital experiences.
            </p>
          </div>
          <div className="service-card fade-in">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>SEO Optimization</h3>
            <p>
              Comprehensive SEO strategies to improve your online visibility and drive organic
              traffic to your digital platforms.
            </p>
          </div>
          <div className="service-card fade-in-delay-1">
            <div className="service-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Backend Scaling</h3>
            <p>
              Robust backend infrastructure solutions designed to handle growth and ensure
              optimal performance under load.
            </p>
          </div>
          <div className="service-card fade-in-delay-2">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Website Maintenance</h3>
            <p>
              Ongoing support and maintenance services to keep your digital assets secure,
              updated, and performing optimally.
            </p>
          </div>
          <div className="service-card fade-in">
            <div className="service-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Deployment & Hosting</h3>
            <p>
              Reliable hosting solutions and seamless deployment processes to ensure your
              applications are always accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
