import React from 'react';
    import { PrebuiltConfig } from '../../types';
    import { ShoppingCart } from 'lucide-react';
    import { useCart } from '../../context/CartContext';

    interface Props {
      config: PrebuiltConfig;
    }

    const PrebuiltCard: React.FC<Props> = ({ config }) => {
      const { addToCart } = useCart();

      const handleAddToCart = () => {
        addToCart(config);
      };

      return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src={config.imageUrl} 
            alt={config.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{config.name}</h3>
                <p className="text-gray-600">{config.category}</p>
              </div>
              <span className="text-2xl font-bold text-cyan-600">{config.price}€</span>
            </div>

            <div className="space-y-2">
              {Object.entries(config.highlights).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-gray-600">{key}</span>
                  <span className="text-gray-800 font-medium">{value}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Ajouter au Panier
            </button>
          </div>
        </div>
      );
    };

    export default PrebuiltCard;
