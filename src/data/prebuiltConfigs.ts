import { PrebuiltConfig } from '../types';

export const prebuiltConfigs: PrebuiltConfig[] = [
  {
    id: 'gaming-1',
    name: 'PC Gamer Pro',
    category: 'Gaming Haute Performance',
    price: 2499,
    imageUrl: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
    highlights: {
      'Processeur': 'Intel Core i9-13900K',
      'Carte Graphique': 'NVIDIA RTX 4080',
      'RAM': '32GB DDR5',
      'Stockage': 'SSD 2TB NVMe'
    }
  },
  {
    id: 'gaming-2',
    name: 'PC Gamer Plus',
    category: 'Gaming Performance',
    price: 1799,
    imageUrl: 'https://images.unsplash.com/photo-1587831991559-20c1ba52a5df?auto=format&fit=crop&w=800&q=80',
    highlights: {
      'Processeur': 'AMD Ryzen 7 7800X3D',
      'Carte Graphique': 'NVIDIA RTX 4070 Ti',
      'RAM': '32GB DDR5',
      'Stockage': 'SSD 1TB NVMe'
    }
  },
  {
    id: 'workstation-1',
    name: 'Station de Travail Pro',
    category: 'Workstation',
    price: 3299,
    imageUrl: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=800&q=80',
    highlights: {
      'Processeur': 'AMD Threadripper',
      'Carte Graphique': 'NVIDIA RTX 4090',
      'RAM': '128GB DDR5',
      'Stockage': 'SSD 4TB NVMe'
    }
  }
];
