import React from 'react';
import './contactform.css';

const ContactForm = () => {
  return (
    <section id="contact" className="contact-form">
      <h2 className="section-title">Contact Me</h2>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
