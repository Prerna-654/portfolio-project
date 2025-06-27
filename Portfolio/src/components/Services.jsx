import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section-title">Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>I create responsive and fast websites using React and modern web technologies.</p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>I design clean and user-friendly interfaces for great user experiences.</p>
        </div>
        <div className="service-card">
          <h3>Portfolio Setup</h3>
          <p>I help developers and designers build and deploy professional online portfolios.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
