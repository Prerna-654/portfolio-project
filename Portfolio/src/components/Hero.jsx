import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Prerna 👋</h1>
        <p>I’m a front-end developer focused on building clean and responsive web experiences.</p>
        <a href="#contact" className="hero-button">Let's Connect</a>
      </div>
    </section>
  );
};

export default Hero;
