import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Construisez Votre PC de Rêve
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Configurez votre ordinateur idéal avec notre outil simple et intuitif. 
            Des composants de qualité, une compatibilité garantie.
          </p>
          <Link
            to="/builder"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all"
          >
            Commencer la Configuration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
