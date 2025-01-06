import React from 'react';
import { useBuildContext } from '../../context/BuildContext';
import { ComponentCategory } from '../../types';
import { categoryIcons } from '../../utils/icons';
import { X } from 'lucide-react';

const SelectedComponents: React.FC = () => {
  const { selectedComponents, removeComponent } = useBuildContext();
  const categories = Object.values(ComponentCategory);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Selected Components</h2>
      
      <div className="space-y-3">
        {categories.map(category => {
          const component = selectedComponents[category];
          const Icon = categoryIcons[category];

          return (
            <div 
              key={category} 
              className={`
                flex items-center gap-3 p-3 rounded-lg transition-all
                ${component 
                  ? 'bg-white shadow-sm' 
                  : 'bg-gray-50 border border-dashed border-gray-200'
                }
              `}
            >
              <Icon className="w-5 h-5 text-gray-500" />
              <div className="flex-1 min-w-0">
                {component ? (
                  <div className="flex justify-between items-center">
                    <div className="min-w-0">
                      <p className="font-medium text-gray-800 truncate">{component.name}</p>
                      <p className="text-sm text-gray-500">${component.price}</p>
                    </div>
                    <button
                      onClick={() => removeComponent(category)}
                      className="ml-2 p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
                      title="Remove component"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-400">No {category} selected</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedComponents;
