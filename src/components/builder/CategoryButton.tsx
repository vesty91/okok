import React from 'react';
import { ComponentCategory } from '../../types';
import { categoryIcons } from '../../utils/icons';
import { useBuildContext } from '../../context/BuildContext';

interface CategoryButtonProps {
  category: ComponentCategory;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
  const { activeCategory, setActiveCategory, selectedComponents } = useBuildContext();
  const Icon = categoryIcons[category];
  const isSelected = category === activeCategory;
  const hasComponent = !!selectedComponents[category];

  return (
    <button
      onClick={() => setActiveCategory(isSelected ? null : category)}
      className={`
        w-full flex items-center space-x-3 p-3 rounded-lg transition-all
        ${isSelected 
          ? 'bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700' 
          : 'hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 text-gray-700 hover:text-cyan-700'
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span>{category}</span>
      {hasComponent && (
        <span className="ml-auto text-xs bg-cyan-600 text-white px-2 py-1 rounded-full">
          ✓
        </span>
      )}
    </button>
  );
}

export default CategoryButton;
