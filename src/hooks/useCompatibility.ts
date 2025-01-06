import { useBuildContext } from '../context/BuildContext';
    import { ComponentCategory } from '../types';

    export const useCompatibility = () => {
      const { selectedComponents } = useBuildContext();

      const checkSocketCompatibility = () => {
        const cpu = selectedComponents[ComponentCategory.CPU];
        const motherboard = selectedComponents[ComponentCategory.MOTHERBOARD];

        if (!cpu || !motherboard) return true;

        const intelSocket = motherboard.specs.socket === 'LGA 1700' && cpu.brand === 'Intel';
        const amdSocket = motherboard.specs.socket === 'AM5' && cpu.brand === 'AMD';

        return intelSocket || amdSocket;
      };

      const checkPowerRequirements = () => {
        const psu = selectedComponents[ComponentCategory.PSU];
        const gpu = selectedComponents[ComponentCategory.GPU];
        const cpu = selectedComponents[ComponentCategory.CPU];

        if (!psu) return true;

        const psuWattage = parseInt(psu.specs.wattage);
        const gpuPower = gpu ? parseInt(gpu.specs.tdp) : 0;
        const cpuPower = cpu ? parseInt(cpu.specs.tdp) : 0;
        const baseSystemPower = 150; // For other components

        const totalPower = gpuPower + cpuPower + baseSystemPower;
        return psuWattage >= totalPower;
      };

      const getTotalWattage = () => {
        const gpu = selectedComponents[ComponentCategory.GPU];
        const cpu = selectedComponents[ComponentCategory.CPU];
        const gpuPower = gpu ? parseInt(gpu.specs.tdp) : 0;
        const cpuPower = cpu ? parseInt(cpu.specs.tdp) : 0;
        const baseSystemPower = 150; // For other components

        return gpuPower + cpuPower + baseSystemPower;
      };

      const getCompatibilityIssues = () => {
        const issues = [];

        if (!checkSocketCompatibility()) {
          issues.push('CPU and motherboard socket are incompatible');
        }

        if (!checkPowerRequirements()) {
          issues.push('Power supply wattage may be insufficient');
        }

        return issues;
      };

      return {
        isCompatible: getCompatibilityIssues().length === 0,
        compatibilityIssues: getCompatibilityIssues(),
        getTotalWattage
      };
    };
