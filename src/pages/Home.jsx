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
        <BentoGrid />
      </Reveal>

      <Reveal>
        <PopularExperiences />
      </Reveal>

      <Reveal>
        <WhyWendelu className="no-pt" />
      </Reveal>

      <Reveal>
        <PromoBanner className="no-pt" />
      </Reveal>

      <Reveal>
        <FAQSection className="no-pt" />
      </Reveal>

      <Reveal>
        <Testimonials className="no-pt" />
      </Reveal>
    </div>
  );
};

export default Home;
