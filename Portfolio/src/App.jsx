import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/whychooseus';
import ContactForm from './components/Contactform'; 
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactForm /> 
      <Footer/>
    </>
  );
}

export default App;
