import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import TeamSection from '../components/TeamSection';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <TeamSection />
      <Blog />
      <Contact />
    </main>
  );
};

export default HomePage;