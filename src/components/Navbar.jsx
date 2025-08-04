import React, { useEffect } from 'react';
import './Styles.css';

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
      const toggleMenu = () => {
        navMenu.classList.toggle('active');
      };

      hamburger.addEventListener('click', toggleMenu);

      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });

      return () => {
        hamburger.removeEventListener('click', toggleMenu);
        links.forEach(link => {
          link.removeEventListener('click', () => {
            navMenu.classList.remove('active');
          });
        });
      };
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Vitalisyshak Tech</div>
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#technology" className="nav-link">Technology</a></li>
          <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          {/* <li><a href="#testimonials" className="nav-link">Testimonials</a></li> */}
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
