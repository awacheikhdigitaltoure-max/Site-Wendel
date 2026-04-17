import React from 'react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import Testimonials from '../components/Testimonials';
import HomeDestinationsSlider from '../components/HomeDestinationsSlider';
import HomeExperiencesSlider from '../components/HomeExperiencesSlider';
import WhyWendelu from '../components/WhyWendelu';
import PromoBanner from '../components/PromoBanner';
import StatsSection from '../components/StatsSection';


const Home = () => {
  return (
    <div className="page home-page">
      <Hero />
      <StatsSection />
      
      <Reveal>
        <HomeDestinationsSlider />
      </Reveal>

      <Reveal>
        <HomeExperiencesSlider />
      </Reveal>

      <Reveal>
        <WhyWendelu className="no-pt" />
      </Reveal>

      <Reveal>
        <PromoBanner className="no-pt" />
      </Reveal>



      <Reveal>
        <Testimonials className="no-pt" />
      </Reveal>
    </div>
  );
};

export default Home;
