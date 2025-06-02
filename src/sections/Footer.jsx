import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Check scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle newsletter form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      console.log('Newsletter signup:', newsletterEmail);
      setSubmitted(true);
      setNewsletterEmail('');
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer id="footer" className="footer">
      {/* Wave decoration */}
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="footer-content">
        {/* Company info column */}
        <div className="footer-column">
          <span className="footer-logo">
            Neph<span className="footer-logo-highlight">ele</span>
          </span>
          <p className="footer-about">
            Nephele is an AI-powered interview assistant that helps candidates prepare with real-time feedback, resume analysis, and personalized coaching.
          </p>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              G
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              L
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              T
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              I
            </a>
          </div>
        </div>
        
        {/* Quick links column */}
        <div className="footer-column">
          <h3 className="footer-links-title">Quick Links</h3>
          <ul className="footer-links">
            <li className="footer-link-item">
              <a href="#home" className="footer-link">
                <span className="footer-link-icon">→</span> Home
              </a>
            </li>
            <li className="footer-link-item">
              <a href="#about" className="footer-link">
                <span className="footer-link-icon">→</span> About Nephele
              </a>
            </li>
            <li className="footer-link-item">
              <a href="#features" className="footer-link">
                <span className="footer-link-icon">→</span> Features
              </a>
            </li>
            <li className="footer-link-item">
              <a href="#videos" className="footer-link">
                <span className="footer-link-icon">→</span> Demo Videos
              </a>
            </li>
          </ul>
        </div>
        
        {/* Resources column */}
        <div className="footer-column">
          <h3 className="footer-links-title">Resources</h3>
          <ul className="footer-links">
            <li className="footer-link-item">
              <a href="#" className="footer-link">
                <span className="footer-link-icon">→</span> Cloud-Native
              </a>
            </li>
            <li className="footer-link-item">
              <a href="#" className="footer-link">
                <span className="footer-link-icon">→</span> API Reference
              </a>
            </li>
            <li className="footer-link-item">
              <a href="#" className="footer-link">
                <span className="footer-link-icon">→</span> Privacy Policy
              </a>
            </li>
            <li className="footer-link-item">
              <a href="#" className="footer-link">
                <span className="footer-link-icon">→</span> Terms of Service
              </a>
            </li>
            <li className="footer-link-item">
              <a href="#" className="footer-link">
                <span className="footer-link-icon">→</span> FAQs
              </a>
            </li>
          </ul>
        </div>
        
        {/* Newsletter column */}
        <div className="footer-column">
          <h3 className="footer-links-title">Stay Updated</h3>
          <p className="footer-about">
            Subscribe to our newsletter for the latest updates on Nephele's features and improvements.
          </p>
          {submitted ? (
            <p className="footer-about" style={{ color: 'var(--footer-link)' }}>
              Thank you for subscribing!
            </p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                →
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p style={{fontWeight:600, color:'white', fontSize:'1.08em', marginBottom:'0.2em'}}>Created by AWS Cloud Club – St. Joseph’s Institute of Technology</p>
        <p>Built with AWS</p>
        <p className="footer-credits">&copy; {new Date().getFullYear()} Nephele Team. All rights reserved.</p>
      </div>
      
      {/* Back to top button */}
      <div 
        className={`back-to-top ${isScrolled ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Back to top"
      >
        ↑
      </div>
    </footer>
  );
};

export default Footer;
