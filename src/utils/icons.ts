import { Cpu, CircuitBoard, HardDrive, Fan, Power, Box } from 'lucide-react';
import { ComponentCategory } from '../types';

export const categoryIcons = {
  [ComponentCategory.CPU]: Cpu,
  [ComponentCategory.MOTHERBOARD]: CircuitBoard,
  [ComponentCategory.RAM]: CircuitBoard, // Using CircuitBoard for RAM since Chip isn't available
  [ComponentCategory.GPU]: HardDrive,
  [ComponentCategory.STORAGE]: HardDrive,
  [ComponentCategory.PSU]: Power,
  [ComponentCategory.CASE]: Box,
  [ComponentCategory.COOLING]: Fan,
} as const;
