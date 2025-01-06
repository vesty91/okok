import React, { useState, useRef, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { ShoppingCart, User, Cpu, Home, Settings, HeartHandshake, Package } from 'lucide-react';
    import { ComponentCategory } from '../../types';

    const Navbar = () => {
      const navItems = [
        { label: 'Accueil', icon: <Home className="w-5 h-5" />, path: '/' },
        { label: 'Configurateur', icon: <Cpu className="w-5 h-5" />, path: '/builder' },
        {
          label: 'Composants',
          icon: <Package className="w-5 h-5" />,
          path: '/components',
          subItems: Object.values(ComponentCategory).map(category => ({
            label: category,
            path: `/components/${category.toLowerCase().replace(/ /g, '-')}`,
          })),
        },
        { label: 'PC Préfabriqués', icon: <Settings className="w-5 h-5" />, path: '/prebuilt' },
        { label: 'Support', icon: <HeartHandshake className="w-5 h-5" />, path: '/support' },
      ];

      const location = useLocation();
      const [isComponentsOpen, setIsComponentsOpen] = useState(false);
      const componentsRef = useRef(null);

      const handleComponentsClick = () => {
        setIsComponentsOpen(!isComponentsOpen);
      };

      const handleCloseMenu = (e: MouseEvent) => {
        if (componentsRef.current && !componentsRef.current.contains(e.target)) {
          setIsComponentsOpen(false);
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleCloseMenu);
        return () => {
          document.removeEventListener('mousedown', handleCloseMenu);
        };
      }, []);

      return (
        <nav className="bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <Cpu className="w-8 h-8 text-white" />
                <span className="font-bold text-xl text-white">PC Builder Pro</span>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.label} className="relative" ref={item.subItems ? componentsRef : null}>
                    {item.subItems ? (
                      <button
                        onClick={handleComponentsClick}
                        className={`flex items-center space-x-1 text-white/80 hover:text-white transition-colors py-2 px-3 rounded-md ${location.pathname.startsWith('/components') ? 'text-white' : ''}`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-1 text-white/80 hover:text-white transition-colors py-2 px-3 rounded-md ${location.pathname === item.path ? 'text-white' : ''}`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    )}
                    {item.subItems && isComponentsOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                        {item.subItems.map(subItem => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            onClick={() => setIsComponentsOpen(false)}
                            className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors ${location.pathname === subItem.path ? 'bg-gray-100' : ''}`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Link to="/cart" className="text-white/80 hover:text-white relative" title="Panier">
                  <ShoppingCart className="w-6 h-6" />
                </Link>
                <button className="text-white/80 hover:text-white" title="Mon Compte">
                  <User className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      );
    };

    export default Navbar;
