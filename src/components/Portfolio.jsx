import React from 'react';
import './Styles.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Showcasing our latest projects and client success stories
          </p>
        </div>
        <div className="portfolio-grid">
          {/* ChefVoice */}
          <div className="portfolio-card fade-in">
            <div className="portfolio-image">
              <i className="fas fa-microphone-alt"></i>
            </div>
            <div className="portfolio-content">
              <h3>ChefVoice – Voice-Controlled Cooking App</h3>
              <p>
                A voice-powered cooking assistant built using React, Firebase, and the Web Speech & Whisper APIs.
                Guides users step-by-step through recipes with reminders and real-time voice interaction.
              </p>
            </div>
          </div>

          {/* CashView */}
          <div className="portfolio-card fade-in-delay-1">
            <div className="portfolio-image">
              <i className="fas fa-wallet"></i>
            </div>
            <div className="portfolio-content">
              <h3>CashView – Personal Finance Dashboard</h3>
              <p>
                A finance tracker that parses Gmail emails to automatically extract and categorize spending.
                Built with React, Firebase Authentication, Firestore, and custom regex extraction logic.
              </p>
            </div>
          </div>

          {/* PrepMate */}
          <div className="portfolio-card fade-in-delay-2">
            <div className="portfolio-image">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="portfolio-content">
              <h3>PrepMate – Smart Study Planner</h3>
              <p>
                A smart study schedule web app that helps students plan, track, and revise subjects for exams.
                Includes auto reminders, progress visualization, and topic-wise breakdown using Firebase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
