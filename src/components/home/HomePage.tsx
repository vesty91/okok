import React from 'react';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default HomePage;
