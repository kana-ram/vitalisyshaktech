import React from 'react';
import './components/Styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technology />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
