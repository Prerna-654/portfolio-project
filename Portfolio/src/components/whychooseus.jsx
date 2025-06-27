import React from 'react';
import './whychooseus.css';

const WhyChooseUs = () => {
  return (
    <section id="why" className="why-choose-us">
      <h2 className="section-title">Why Choose Me?</h2>
      <div className="reasons-grid">
        <div className="reason-card">
          <h3>Attention to Detail</h3>
          <p>I believe great design is in the details and I ensure every element is polished.</p>
        </div>
        <div className="reason-card">
          <h3>Responsive Design</h3>
          <p>All my projects look and work great on any device — mobile, tablet, or desktop.</p>
        </div>
        <div className="reason-card">
          <h3>On-Time Delivery</h3>
          <p>I’m committed to deadlines and delivering high-quality work on time.</p>
        </div>
        <div className="reason-card">
          <h3>Modern Tech Stack</h3>
          <p>I use the latest technologies like React, Vite, and CSS Grid/Flexbox.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
