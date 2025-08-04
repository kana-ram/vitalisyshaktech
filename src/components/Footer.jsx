import React from 'react';
import './Styles.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vitalisyshak Tech</h3>
            <p>Transforming ideas into digital reality through innovative technology solutions.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/kana-ram-khatik-474601229/" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/kana-ram" className="social-link"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/infoseek.sk?igsh=MTNnYjV2cGNxZGt2bQ==" className="social-link"><i className="fab fa-instagram"></i></a>
              {/* <a href="#" className="social-link"><i className="fab fa-twitter"></i></a> */}
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#technology">Technology</a>
            <a href="#portfolio">Portfolio</a>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <a href="#services">Web Development</a>
            <a href="#services">Mobile Apps</a>
            <a href="#services">UI/UX Design</a>
            <a href="#services">SEO Optimization</a>
            <a href="#services">Backend Scaling</a>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p><i className="fas fa-envelope"></i> vitalisyshak.site@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 9660013393</p>
            <p><i className="fas fa-map-marker-alt"></i> Jaipur, Rajasthan, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Vitalisyshak Tech Company. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
