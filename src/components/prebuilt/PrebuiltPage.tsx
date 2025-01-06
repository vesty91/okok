import React from 'react';
import PrebuiltCard from './PrebuiltCard';
import { prebuiltConfigs } from '../../data/prebuiltConfigs';

const PrebuiltPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">PC Préfabriqués</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prebuiltConfigs.map((config) => (
          <PrebuiltCard key={config.id} config={config} />
        ))}
      </div>
    </div>
  );
};

export default PrebuiltPage;
