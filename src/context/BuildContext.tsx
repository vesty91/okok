import React, { createContext, useContext, useState } from 'react';
import { Component, ComponentCategory, BuildConfiguration } from '../types';

interface BuildContextType {
  selectedComponents: BuildConfiguration;
  activeCategory: ComponentCategory | null;
  setActiveCategory: (category: ComponentCategory | null) => void;
  selectComponent: (component: Component) => void;
  removeComponent: (category: ComponentCategory) => void;
  getTotalPrice: () => number;
}

const BuildContext = createContext<BuildContextType | undefined>(undefined);

export const BuildProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedComponents, setSelectedComponents] = useState<BuildConfiguration>({});
  const [activeCategory, setActiveCategory] = useState<ComponentCategory | null>(null);

  const selectComponent = (component: Component) => {
    setSelectedComponents(prev => ({
      ...prev,
      [component.category]: component
    }));
  };

  const removeComponent = (category: ComponentCategory) => {
    setSelectedComponents(prev => {
      const newConfig = { ...prev };
      delete newConfig[category];
      return newConfig;
    });
  };

  const getTotalPrice = () => {
    return Object.values(selectedComponents).reduce((total, component) => 
      total + (component?.price || 0), 0
    );
  };

  return (
    <BuildContext.Provider value={{
      selectedComponents,
      activeCategory,
      setActiveCategory,
      selectComponent,
      removeComponent,
      getTotalPrice
    }}>
      {children}
    </BuildContext.Provider>
  );
};

export const useBuildContext = () => {
  const context = useContext(BuildContext);
  if (context === undefined) {
    throw new Error('useBuildContext must be used within a BuildProvider');
  }
  return context;
};
