import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Mission from './components/sections/Mission';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <Testimonials />
      <Team />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
