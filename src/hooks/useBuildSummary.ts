import { useBuildContext } from '../context/BuildContext';
import { ComponentCategory } from '../types';

export const useBuildSummary = () => {
  const { selectedComponents } = useBuildContext();

  const getTotalPrice = () => {
    return Object.values(selectedComponents).reduce(
      (total, component) => total + (component?.price || 0),
      0
    );
  };

  const getMissingEssentials = () => {
    const essentials = [
      ComponentCategory.CPU,
      ComponentCategory.MOTHERBOARD,
      ComponentCategory.RAM,
      ComponentCategory.STORAGE,
      ComponentCategory.PSU,
      ComponentCategory.CASE,
    ];

    return essentials.filter(category => !selectedComponents[category]);
  };

  const canSaveBuild = () => {
    return getMissingEssentials().length === 0;
  };

  return {
    totalPrice: getTotalPrice(),
    missingEssentials: getMissingEssentials(),
    canSaveBuild,
  };
};
