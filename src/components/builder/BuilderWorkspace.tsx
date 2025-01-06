import React from 'react';
import { useBuildContext } from '../../context/BuildContext';
import ComponentList from './ComponentList';
import SelectedComponents from './SelectedComponents';
import BuildSummary from './BuildSummary';

const BuilderWorkspace = () => {
  const { activeCategory } = useBuildContext();

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="bg-gradient-to-br from-white to-cyan-50 rounded-lg shadow-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Custom PC Builder</h1>
          <p className="text-gray-600">Select components to build your dream PC</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {activeCategory ? (
              <ComponentList />
            ) : (
              <div className="text-center text-gray-500 bg-white p-8 rounded-lg border border-gray-200">
                <p className="text-lg">Select a category from the sidebar to start building</p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <SelectedComponents />
            <BuildSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderWorkspace;
