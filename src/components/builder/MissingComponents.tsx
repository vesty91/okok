import React from 'react';
import { ComponentCategory } from '../../types';

interface MissingComponentsProps {
  missingComponents: ComponentCategory[];
}

const MissingComponents: React.FC<MissingComponentsProps> = ({ missingComponents }) => {
  if (missingComponents.length === 0) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded p-2">
      <p className="text-sm text-blue-700 font-medium mb-1">Missing essential components:</p>
      <ul className="text-sm text-blue-600 list-disc list-inside">
        {missingComponents.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissingComponents;
