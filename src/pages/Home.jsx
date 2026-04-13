import React from 'react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import Testimonials from '../components/Testimonials';
import BentoGrid from '../components/BentoGrid';
import PopularExperiences from '../components/PopularExperiences';
import WhyWendelu from '../components/WhyWendelu';
import PromoBanner from '../components/PromoBanner';
import StatsSection from '../components/StatsSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
    <div className="page home-page">
      <Hero />
      <Reveal>
        <div style={{ marginTop: 'var(--section-spacing)' }}>
          <BentoGrid />
        </div>
      </Reveal>
      <Reveal>
        <PopularExperiences />
      </Reveal>
      <Reveal>
        <PromoBanner />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
    </div>
  );
};

export default Home;
