export interface Component {
  id: string;
  name: string;
  category: ComponentCategory;
  price: number;
  brand: string;
  specs: Record<string, string>;
  imageUrl: string;
  stock: number;
}

export enum ComponentCategory {
  CPU = 'CPU',
  MOTHERBOARD = 'Carte Mère',
  RAM = 'Mémoire RAM',
  GPU = 'Carte Graphique',
  STORAGE = 'Stockage',
  PSU = 'Alimentation',
  CASE = 'Boîtier',
  COOLING = 'Refroidissement'
}

export interface BuildConfiguration {
  [ComponentCategory.CPU]?: Component;
  [ComponentCategory.MOTHERBOARD]?: Component;
  [ComponentCategory.RAM]?: Component;
  [ComponentCategory.GPU]?: Component;
  [ComponentCategory.STORAGE]?: Component;
  [ComponentCategory.PSU]?: Component;
  [ComponentCategory.CASE]?: Component;
  [ComponentCategory.COOLING]?: Component;
}

export interface PrebuiltConfig {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  highlights: Record<string, string>;
}
