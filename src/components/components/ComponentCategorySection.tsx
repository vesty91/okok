import React from 'react';
import { ComponentCategory } from '../../types';
import { mockComponents } from '../../data/mockComponents';
import ComponentCard from '../builder/ComponentCard';

interface Props {
  category: ComponentCategory;
}

const ComponentCategorySection: React.FC<Props> = ({ category }) => {
  const components = mockComponents.filter(c => c.category === category);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map(component => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>
    </div>
  );
};

export default ComponentCategorySection;
