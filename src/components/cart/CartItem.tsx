import React from 'react';
    import { PrebuiltConfig } from '../../types';
    import { useCart } from '../../context/CartContext';
    import { X, Plus, Minus } from 'lucide-react';

    interface CartItemProps {
      item: PrebuiltConfig;
    }

    const CartItem: React.FC<CartItemProps> = ({ item }) => {
      const { removeFromCart, updateQuantity } = useCart();
      const [quantity, setQuantity] = React.useState(1);

      const handleRemoveFromCart = () => {
        removeFromCart(item.id);
      };

      const handleIncrement = () => {
        setQuantity(prev => {
          updateQuantity(item.id, prev + 1);
          return prev + 1;
        });
      };

      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(prev => {
            updateQuantity(item.id, prev - 1);
            return prev - 1;
          });
        }
      };

      return (
        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
          <div className="flex items-center gap-4">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm">${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={handleDecrement}
                className="px-2 py-1 text-gray-500 hover:text-gray-700"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-2 py-1 text-gray-700">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-2 py-1 text-gray-500 hover:text-gray-700"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleRemoveFromCart}
              className="text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
              title="Remove from cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      );
    };

    export default CartItem;
