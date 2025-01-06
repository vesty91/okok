import React from 'react';
import BuilderSidebar from './BuilderSidebar';
import BuilderWorkspace from './BuilderWorkspace';

const Builder = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <BuilderSidebar />
      <BuilderWorkspace />
    </div>
  );
};

export default Builder;
