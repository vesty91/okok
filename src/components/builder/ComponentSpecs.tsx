import React from 'react';
import { Component } from '../../types';

interface ComponentSpecsProps {
  component: Component;
}

const ComponentSpecs: React.FC<ComponentSpecsProps> = ({ component }) => {
  return (
    <div className="mt-2 space-y-1">
      {Object.entries(component.specs).map(([key, value]) => (
        <div key={key} className="flex justify-between text-sm">
          <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
          <span className="text-gray-700 font-medium">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ComponentSpecs;
