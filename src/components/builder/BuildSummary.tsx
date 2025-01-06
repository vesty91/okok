import React from 'react';
    import { useCompatibility } from '../../hooks/useCompatibility';
    import { useBuildSummary } from '../../hooks/useBuildSummary';
    import BuildSummaryPrice from './BuildSummaryPrice';
    import CompatibilityStatus from './CompatibilityStatus';
    import MissingComponents from './MissingComponents';
    import SaveBuildButton from './SaveBuildButton';
    import { useBuildContext } from '../../context/BuildContext';
    import { useCart } from '../../context/CartContext';
    import { ComponentCategory } from '../../types';

    const BuildSummary: React.FC = () => {
      const { isCompatible, compatibilityIssues, getTotalWattage } = useCompatibility();
      const { totalPrice, missingEssentials, canSaveBuild } = useBuildSummary();
      const { selectedComponents } = useBuildContext();
      const { addToCart } = useCart();

      const handleSave = () => {
        // TODO: Implement save functionality
        alert('Build saved successfully!');
      };

      const handleAddToCart = () => {
        if (canSaveBuild()) {
          const prebuiltConfig = {
            id: 'custom-build-' + Date.now(),
            name: 'Custom PC Build',
            category: 'Custom',
            price: totalPrice,
            imageUrl: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=800&q=80',
            highlights: Object.entries(selectedComponents).reduce((acc, [key, component]) => {
              if (component) {
                acc[key] = component.name;
              }
              return acc;
            }, {}),
          };
          addToCart(prebuiltConfig);
        }
      };

      return (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Build Summary</h2>
          
          <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
            <BuildSummaryPrice totalPrice={totalPrice} />
            <CompatibilityStatus 
              isCompatible={isCompatible} 
              issues={compatibilityIssues} 
              totalWattage={getTotalWattage()}
            />
            <MissingComponents missingComponents={missingEssentials} />
            <SaveBuildButton canSave={canSaveBuild()} onSave={handleSave} />
            {canSaveBuild() && (
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );
    };

    export default BuildSummary;
