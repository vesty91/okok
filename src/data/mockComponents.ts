import { Component, ComponentCategory } from '../types';

    export const mockComponents: Component[] = [
      // CPUs
      {
        id: 'cpu-1',
        name: 'Intel Core i9-13900K',
        category: ComponentCategory.CPU,
        price: 589.99,
        brand: 'Intel',
        specs: {
          cores: '24 (8P + 16E)',
          baseFrequency: '3.0 GHz',
          maxFrequency: '5.8 GHz',
          tdp: '125W'
        },
        imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80',
        stock: 10
      },
      {
        id: 'cpu-2',
        name: 'AMD Ryzen 9 7950X',
        category: ComponentCategory.CPU,
        price: 699.99,
        brand: 'AMD',
        specs: {
          cores: '16',
          baseFrequency: '4.5 GHz',
          maxFrequency: '5.7 GHz',
          tdp: '170W'
        },
        imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=300&q=80',
        stock: 8
      },
      {
        id: 'cpu-3',
        name: 'AMD Ryzen 7 7800X3D',
        category: ComponentCategory.CPU,
        price: 449.99,
        brand: 'AMD',
        specs: {
          cores: '8',
          baseFrequency: '4.2 GHz',
          maxFrequency: '5.0 GHz',
          tdp: '120W'
        },
        imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=300&q=80',
        stock: 15
      },
      {
        id: 'cpu-4',
        name: 'Intel Core i7-13700K',
        category: ComponentCategory.CPU,
        price: 409.99,
        brand: 'Intel',
        specs: {
          cores: '16 (8P + 8E)',
          baseFrequency: '3.4 GHz',
          maxFrequency: '5.4 GHz',
          tdp: '125W'
        },
        imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80',
        stock: 12
      },
      {
        id: 'cpu-5',
        name: 'AMD Ryzen 5 7600X',
        category: ComponentCategory.CPU,
        price: 299.99,
        brand: 'AMD',
        specs: {
          cores: '6',
          baseFrequency: '4.7 GHz',
          maxFrequency: '5.3 GHz',
          tdp: '105W'
        },
        imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=300&q=80',
        stock: 18
      },
      // Motherboards
      {
        id: 'mb-1',
        name: 'ASUS ROG Maximus Z790 Hero',
        category: ComponentCategory.MOTHERBOARD,
        price: 629.99,
        brand: 'ASUS',
        specs: {
          socket: 'LGA 1700',
          formFactor: 'ATX',
          memorySlots: '4',
          maxMemory: '128GB'
        },
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
        stock: 5
      },
      {
        id: 'mb-2',
        name: 'MSI MPG B650 CARBON WIFI',
        category: ComponentCategory.MOTHERBOARD,
        price: 329.99,
        brand: 'MSI',
        specs: {
          socket: 'AM5',
          formFactor: 'ATX',
          memorySlots: '4',
          maxMemory: '128GB'
        },
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
        stock: 12
      },
      {
        id: 'mb-3',
        name: 'Gigabyte Z790 AORUS Elite AX',
        category: ComponentCategory.MOTHERBOARD,
        price: 449.99,
        brand: 'Gigabyte',
        specs: {
          socket: 'LGA 1700',
          formFactor: 'ATX',
          memorySlots: '4',
          maxMemory: '128GB'
        },
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
        stock: 7
      },
      {
        id: 'mb-4',
        name: 'ASRock B650E Steel Legend WiFi',
        category: ComponentCategory.MOTHERBOARD,
        price: 299.99,
        brand: 'ASRock',
        specs: {
          socket: 'AM5',
          formFactor: 'ATX',
          memorySlots: '4',
          maxMemory: '128GB'
        },
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
        stock: 10
      },
      {
        id: 'mb-5',
        name: 'ASUS ROG Strix B650-A Gaming WiFi',
        category: ComponentCategory.MOTHERBOARD,
        price: 279.99,
        brand: 'ASUS',
        specs: {
          socket: 'AM5',
          formFactor: 'ATX',
          memorySlots: '4',
          maxMemory: '128GB'
        },
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
        stock: 15
      },
      // RAM
      {
        id: 'ram-1',
        name: 'G.SKILL Trident Z5 RGB',
        category: ComponentCategory.RAM,
        price: 189.99,
        brand: 'G.SKILL',
        specs: {
          capacity: '32GB (2x16GB)',
          speed: 'DDR5-6000',
          timing: 'CL30',
          voltage: '1.35V'
        },
        imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=300&q=80',
        stock: 20
      },
      {
        id: 'ram-2',
        name: 'Corsair Dominator Platinum RGB',
        category: ComponentCategory.RAM,
        price: 249.99,
        brand: 'Corsair',
        specs: {
          capacity: '64GB (2x32GB)',
          speed: 'DDR5-5600',
          timing: 'CL36',
          voltage: '1.35V'
        },
        imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=300&q=80',
        stock: 8
      },
      {
        id: 'ram-3',
        name: 'Kingston Fury Beast RGB',
        category: ComponentCategory.RAM,
        price: 159.99,
        brand: 'Kingston',
        specs: {
          capacity: '32GB (2x16GB)',
          speed: 'DDR5-5200',
          timing: 'CL40',
          voltage: '1.25V'
        },
        imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=300&q=80',
        stock: 22
      },
      {
        id: 'ram-4',
        name: 'Crucial Ballistix RGB',
        category: ComponentCategory.RAM,
        price: 179.99,
        brand: 'Crucial',
        specs: {
          capacity: '32GB (2x16GB)',
          speed: 'DDR4-3600',
          timing: 'CL16',
          voltage: '1.35V'
        },
        imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=300&q=80',
        stock: 18
      },
      {
        id: 'ram-5',
        name: 'Teamgroup T-Force Delta RGB',
        category: ComponentCategory.RAM,
        price: 199.99,
        brand: 'Teamgroup',
        specs: {
          capacity: '32GB (2x16GB)',
          speed: 'DDR5-6400',
          timing: 'CL32',
          voltage: '1.40V'
        },
        imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=300&q=80',
        stock: 10
      },
      // GPUs
      {
        id: 'gpu-1',
        name: 'NVIDIA GeForce RTX 4090',
        category: ComponentCategory.GPU,
        price: 1599.99,
        brand: 'NVIDIA',
        specs: {
          memory: '24GB GDDR6X',
          coreClock: '2.23 GHz',
          tdp: '450W',
          ports: 'HDMI 2.1, 3x DisplayPort 1.4a'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=300&q=80',
        stock: 3
      },
      {
        id: 'gpu-2',
        name: 'AMD Radeon RX 7900 XTX',
        category: ComponentCategory.GPU,
        price: 999.99,
        brand: 'AMD',
        specs: {
          memory: '24GB GDDR6',
          coreClock: '2.3 GHz',
          tdp: '355W',
          ports: 'HDMI 2.1, 2x DisplayPort 2.1'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=300&q=80',
        stock: 6
      },
      {
        id: 'gpu-3',
        name: 'NVIDIA GeForce RTX 4080',
        category: ComponentCategory.GPU,
        price: 1199.99,
        brand: 'NVIDIA',
        specs: {
          memory: '16GB GDDR6X',
          coreClock: '2.51 GHz',
          tdp: '320W',
          ports: 'HDMI 2.1, 3x DisplayPort 1.4a'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=300&q=80',
        stock: 5
      },
      {
        id: 'gpu-4',
        name: 'AMD Radeon RX 7800 XT',
        category: ComponentCategory.GPU,
        price: 799.99,
        brand: 'AMD',
        specs: {
          memory: '16GB GDDR6',
          coreClock: '2.43 GHz',
          tdp: '263W',
          ports: 'HDMI 2.1, 2x DisplayPort 2.1'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=300&q=80',
        stock: 10
      },
      {
        id: 'gpu-5',
        name: 'NVIDIA GeForce RTX 4070 Ti',
        category: ComponentCategory.GPU,
        price: 899.99,
        brand: 'NVIDIA',
        specs: {
          memory: '12GB GDDR6X',
          coreClock: '2.61 GHz',
          tdp: '285W',
          ports: 'HDMI 2.1, 3x DisplayPort 1.4a'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=300&q=80',
        stock: 12
      },
      // Storage
      {
        id: 'storage-1',
        name: 'Samsung 990 PRO',
        category: ComponentCategory.STORAGE,
        price: 169.99,
        brand: 'Samsung',
        specs: {
          capacity: '2TB',
          interface: 'PCIe 4.0 x4',
          readSpeed: '7,450 MB/s',
          writeSpeed: '6,900 MB/s'
        },
        imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80',
        stock: 25
      },
      {
        id: 'storage-2',
        name: 'WD Black SN850X',
        category: ComponentCategory.STORAGE,
        price: 149.99,
        brand: 'Western Digital',
        specs: {
          capacity: '2TB',
          interface: 'PCIe 4.0 x4',
          readSpeed: '7,300 MB/s',
          writeSpeed: '6,600 MB/s'
        },
        imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80',
        stock: 15
      },
      {
        id: 'storage-3',
        name: 'Crucial P5 Plus',
        category: ComponentCategory.STORAGE,
        price: 129.99,
        brand: 'Crucial',
        specs: {
          capacity: '2TB',
          interface: 'PCIe 4.0 x4',
          readSpeed: '6,600 MB/s',
          writeSpeed: '5,000 MB/s'
        },
        imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80',
        stock: 20
      },
      {
        id: 'storage-4',
        name: 'Seagate FireCuda 530',
        category: ComponentCategory.STORAGE,
        price: 179.99,
        brand: 'Seagate',
        specs: {
          capacity: '2TB',
          interface: 'PCIe 4.0 x4',
          readSpeed: '7,300 MB/s',
          writeSpeed: '6,900 MB/s'
        },
        imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80',
        stock: 12
      },
      {
        id: 'storage-5',
        name: 'SK Hynix Platinum P41',
        category: ComponentCategory.STORAGE,
        price: 159.99,
        brand: 'SK Hynix',
        specs: {
          capacity: '2TB',
          interface: 'PCIe 4.0 x4',
          readSpeed: '7,000 MB/s',
          writeSpeed: '6,500 MB/s'
        },
        imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80',
        stock: 18
      },
      // Power Supplies
      {
        id: 'psu-1',
        name: 'Corsair HX1500i',
        category: ComponentCategory.PSU,
        price: 399.99,
        brand: 'Corsair',
        specs: {
          wattage: '1500W',
          efficiency: '80+ Platinum',
          modular: 'Full',
          warranty: '10 Years'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80',
        stock: 7
      },
      {
        id: 'psu-2',
        name: 'be quiet! Dark Power Pro 12',
        category: ComponentCategory.PSU,
        price: 369.99,
        brand: 'be quiet!',
        specs: {
          wattage: '1200W',
          efficiency: '80+ Titanium',
          modular: 'Full',
          warranty: '10 Years'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80',
        stock: 9
      },
      {
        id: 'psu-3',
        name: 'Seasonic Prime TX-1000',
        category: ComponentCategory.PSU,
        price: 329.99,
        brand: 'Seasonic',
        specs: {
          wattage: '1000W',
          efficiency: '80+ Titanium',
          modular: 'Full',
          warranty: '12 Years'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80',
        stock: 11
      },
      {
        id: 'psu-4',
        name: 'EVGA SuperNOVA 850 G6',
        category: ComponentCategory.PSU,
        price: 249.99,
        brand: 'EVGA',
        specs: {
          wattage: '850W',
          efficiency: '80+ Gold',
          modular: 'Full',
          warranty: '10 Years'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80',
        stock: 14
      },
      {
        id: 'psu-5',
        name: 'NZXT C850',
        category: ComponentCategory.PSU,
        price: 199.99,
        brand: 'NZXT',
        specs: {
          wattage: '850W',
          efficiency: '80+ Gold',
          modular: 'Semi',
          warranty: '10 Years'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80',
        stock: 16
      },
      // Cases
      {
        id: 'case-1',
        name: 'Lian Li O11 Dynamic EVO',
        category: ComponentCategory.CASE,
        price: 169.99,
        brand: 'Lian Li',
        specs: {
          formFactor: 'Mid Tower',
          material: 'Aluminum, Steel, Glass',
          maxGPULength: '420mm',
          included: '0 fans'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372140-31810fb94474?auto=format&fit=crop&w=300&q=80',
        stock: 12
      },
      {
        id: 'case-2',
        name: 'Fractal Design Torrent',
        category: ComponentCategory.CASE,
        price: 189.99,
        brand: 'Fractal Design',
        specs: {
          formFactor: 'Mid Tower',
          material: 'Steel, Glass',
          maxGPULength: '461mm',
          included: '5 fans'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372140-31810fb94474?auto=format&fit=crop&w=300&q=80',
        stock: 8
      },
      {
        id: 'case-3',
        name: 'NZXT H7 Flow',
        category: ComponentCategory.CASE,
        price: 149.99,
        brand: 'NZXT',
        specs: {
          formFactor: 'Mid Tower',
          material: 'Steel, Glass',
          maxGPULength: '400mm',
          included: '2 fans'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372140-31810fb94474?auto=format&fit=crop&w=300&q=80',
        stock: 14
      },
      {
        id: 'case-4',
        name: 'Corsair 5000D Airflow',
        category: ComponentCategory.CASE,
        price: 179.99,
        brand: 'Corsair',
        specs: {
          formFactor: 'Mid Tower',
          material: 'Steel, Plastic',
          maxGPULength: '400mm',
          included: '2 fans'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372140-31810fb94474?auto=format&fit=crop&w=300&q=80',
        stock: 10
      },
      {
        id: 'case-5',
        name: 'Phanteks Enthoo Pro 2',
        category: ComponentCategory.CASE,
        price: 249.99,
        brand: 'Phanteks',
        specs: {
          formFactor: 'Full Tower',
          material: 'Aluminum, Steel',
          maxGPULength: '500mm',
          included: '0 fans'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372140-31810fb94474?auto=format&fit=crop&w=300&q=80',
        stock: 6
      },
      // Cooling
      {
        id: 'cooling-1',
        name: 'NZXT Kraken Z73',
        category: ComponentCategory.COOLING,
        price: 279.99,
        brand: 'NZXT',
        specs: {
          type: 'Liquid',
          radiatorSize: '360mm',
          fans: '3x 120mm',
          rgb: 'Yes'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=300&q=80',
        stock: 10
      },
      {
        id: 'cooling-2',
        name: 'Noctua NH-D15 chromax.black',
        category: ComponentCategory.COOLING,
        price: 109.99,
        brand: 'Noctua',
        specs: {
          type: 'Air',
          height: '165mm',
          fans: '2x 140mm',
          rgb: 'No'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=300&q=80',
        stock: 15
      },
      {
        id: 'cooling-3',
        name: 'Corsair iCUE H150i Elite LCD',
        category: ComponentCategory.COOLING,
        price: 329.99,
        brand: 'Corsair',
        specs: {
          type: 'Liquid',
          radiatorSize: '360mm',
          fans: '3x 120mm',
          rgb: 'Yes'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=300&q=80',
        stock: 8
      },
      {
        id: 'cooling-4',
        name: 'Arctic Liquid Freezer II 360',
        category: ComponentCategory.COOLING,
        price: 139.99,
        brand: 'Arctic',
        specs: {
          type: 'Liquid',
          radiatorSize: '360mm',
          fans: '3x 120mm',
          rgb: 'No'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=300&q=80',
        stock: 12
      },
      {
        id: 'cooling-5',
        name: 'be quiet! Dark Rock Pro 4',
        category: ComponentCategory.COOLING,
        price: 99.99,
        brand: 'be quiet!',
        specs: {
          type: 'Air',
          height: '163mm',
          fans: '2x 135mm',
          rgb: 'No'
        },
        imageUrl: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=300&q=80',
        stock: 16
      }
    ];
