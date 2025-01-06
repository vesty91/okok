import React from 'react';
    import { ComponentCategory } from '../../types';
    import CategoryButton from './CategoryButton';
    import { useBuildContext } from '../../context/BuildContext';
    import { X } from 'lucide-react';

    const BuilderSidebar: React.FC = () => {
      const { selectedComponents, removeComponent } = useBuildContext();

      return (
        <div className="w-64 bg-gradient-to-b from-white to-cyan-50 shadow-lg h-full">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Components</h2>
            <div className="space-y-2">
              {Object.values(ComponentCategory).map((category) => (
                <div key={category} className="flex items-center justify-between">
                  <CategoryButton category={category} />
                  {selectedComponents[category] && (
                    <button
                      onClick={() => removeComponent(category)}
                      className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
                      title="Clear selection"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default BuilderSidebar;
