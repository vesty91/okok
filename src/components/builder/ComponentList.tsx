import React, { useState, useEffect } from 'react';
    import { useBuildContext } from '../../context/BuildContext';
    import { mockComponents } from '../../data/mockComponents';
    import ComponentCard from './ComponentCard';

    const ComponentList: React.FC = () => {
      const { activeCategory } = useBuildContext();
      const [components, setComponents] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchComponents = async () => {
          setLoading(true);
          setError(null);
          try {
            // Simulate a fetch with a delay
            await new Promise(resolve => setTimeout(resolve, 500));
            const filteredComponents = mockComponents.filter(c => c.category === activeCategory);
            setComponents(filteredComponents);
          } catch (err) {
            setError('Failed to load components.');
          } finally {
            setLoading(false);
          }
        };

        if (activeCategory) {
          fetchComponents();
        } else {
          setComponents([]);
          setLoading(false);
        }
      }, [activeCategory]);

      if (!activeCategory) {
        return (
          <div className="text-center text-gray-500 mt-8">
            Select a category to view components
          </div>
        );
      }

      if (loading) {
        return (
          <div className="text-center text-gray-500 mt-8">
            Loading components...
          </div>
        );
      }

      if (error) {
        return (
          <div className="text-center text-red-500 mt-8">
            {error}
          </div>
        );
      }

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {components.map(component => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      );
    };

    export default ComponentList;
