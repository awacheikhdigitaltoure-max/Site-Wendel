import React from 'react';
import Reveal from '../components/Reveal';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <div className="page about-page pt-[80px] min-h-screen">
      <Reveal>
        <AboutSection />
      </Reveal>
    </div>
  );
};

export default About;
