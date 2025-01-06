import React from 'react';
    import { X } from 'lucide-react';
    import { useCart } from '../../context/CartContext';
    import CartItem from './CartItem';

    interface CartModalProps {
      isOpen: boolean;
      onClose: () => void;
    }

    const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
      const { cartItems, clearCart, getTotalPrice } = useCart();

      if (!isOpen) return null;

      const handleClearCart = () => {
        clearCart();
      };

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-2xl w-full relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold text-gray-800">Total: ${getTotalPrice().toFixed(2)}</span>
                  <button
                    onClick={handleClearCart}
                    className="text-red-500 hover:text-red-700 transition-colors px-3 py-1 rounded-md"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    };

    export default CartModal;
