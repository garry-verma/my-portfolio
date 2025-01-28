// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skill from './components/Skill';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css'; 

const App = () => {
  return (
    <div id="wrapper">
      <Navbar />
      <Hero />
      <Projects />
      <Skill/>
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default App;