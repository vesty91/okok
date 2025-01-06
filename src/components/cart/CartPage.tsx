import React, { useState } from 'react';
    import { useCart } from '../../context/CartContext';
    import CartItem from './CartItem';
    import { CreditCard as CreditCardIcon, Wallet } from 'lucide-react';

    const CartPage = () => {
      const { cartItems, getTotalPrice } = useCart();
      const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

      const paymentMethods = [
        { id: 'credit-card', label: 'Credit Card', icon: <CreditCardIcon className="w-5 h-5" /> },
        { id: 'paypal', label: 'PayPal', icon: <Wallet className="w-5 h-5" /> },
        { id: 'bank-transfer', label: 'Bank Transfer', icon: <Wallet className="w-5 h-5" /> },
      ];

      const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPaymentMethod(e.target.value);
      };

      const handleCheckout = () => {
        if (selectedPaymentMethod) {
          alert(`Proceeding to checkout with ${selectedPaymentMethod}`);
          // TODO: Implement actual checkout logic
        }
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                <span className="text-xl font-semibold text-gray-800">Total: ${getTotalPrice().toFixed(2)}</span>
                <div className="flex items-center gap-4">
                  <select
                    value={selectedPaymentMethod || ''}
                    onChange={handlePaymentMethodChange}
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <option value="" disabled>Select Payment Method</option>
                    {paymentMethods.map(method => (
                      <option key={method.id} value={method.id}>
                        <div className="flex items-center gap-2">
                          {method.icon}
                          {method.label}
                        </div>
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleCheckout}
                    disabled={!selectedPaymentMethod}
                    className={`
                      bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-6 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all
                      ${!selectedPaymentMethod ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };

    export default CartPage;
