import React, { useEffect } from 'react';
import './Styles.css';

const Testimonials = () => {
  useEffect(() => {
    const testimonials = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let intervalId;

    const showSlide = (index) => {
      testimonials.forEach((slide, i) => {
        slide.classList.remove('active', 'prev');
        if (i === index) {
          slide.classList.add('active');
        } else if (i === currentSlide) {
          slide.classList.add('prev');
        }
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });

      currentSlide = index;
    };

    const startSlider = () => {
      intervalId = setInterval(() => {
        const nextSlide = (currentSlide + 1) % testimonials.length;
        showSlide(nextSlide);
      }, 4000);
    };

    const stopSlider = () => clearInterval(intervalId);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopSlider();
        showSlide(index);
        startSlider();
      });
    });

    startSlider();
    return () => stopSlider();
  }, []);

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Client Feedback</h2>
          <p className="section-subtitle">What our clients say about working with us</p>
        </div>
        <div className="testimonials-container">
          <div className="testimonials-slider">
            {/* 1 */}
            <div className="testimonial-slide active">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                  <p className="testimonial-text">
                    "Vitalisyshak Tech transformed our startup’s online presence. Their delivery was smooth and on time. Super impressed!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar"><i className="fas fa-user"></i></div>
                    <div className="author-info">
                      <h4>Rohit Mehra</h4>
                      <p>Founder, CodeKart Solutions</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  </div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                  <p className="testimonial-text">
                    "The mobile app they created for my project works flawlessly. Their design team is also excellent. Highly recommended!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar"><i className="fas fa-user"></i></div>
                    <div className="author-info">
                      <h4>Priya Sharma</h4>
                      <p>App Developer, Bangalore</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  </div>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                  <p className="testimonial-text">
                    "As a student building a tech product, I got excellent mentorship and tech help from this team. Super helpful and supportive!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar"><i className="fas fa-user"></i></div>
                    <div className="author-info">
                      <h4>Aman Gupta</h4>
                      <p>Student, IIT Delhi</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  </div>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                  <p className="testimonial-text">
                    "Thanks to Vitalisyshak Tech, our backend now handles 1000+ concurrent users without lag. Great architecture and scaling!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar"><i className="fas fa-user"></i></div>
                    <div className="author-info">
                      <h4>Sneha Verma</h4>
                      <p>CTO, EcomNest India</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  </div>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                  <p className="testimonial-text">
                    "We saw a huge jump in traffic after their SEO work. Now we’re ranking in top 3 for most keywords. Totally worth it!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar"><i className="fas fa-user"></i></div>
                    <div className="author-info">
                      <h4>Arjun Desai</h4>
                      <p>Founder, DigitalVerse Ahmedabad</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="testimonials-controls">
            <div className="testimonial-dots">
              <span className="dot active" data-slide="0"></span>
              <span className="dot" data-slide="1"></span>
              <span className="dot" data-slide="2"></span>
              <span className="dot" data-slide="3"></span>
              <span className="dot" data-slide="4"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
