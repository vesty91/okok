import React, { createContext, useContext, useState } from 'react';
    import { PrebuiltConfig } from '../types';

    interface CartItemWithQuantity extends PrebuiltConfig {
      quantity: number;
    }

    interface CartContextType {
      cartItems: CartItemWithQuantity[];
      addToCart: (item: PrebuiltConfig) => void;
      removeFromCart: (itemId: string) => void;
      clearCart: () => void;
      updateQuantity: (itemId: string, quantity: number) => void;
      getTotalPrice: () => number;
    }

    const CartContext = createContext<CartContextType | undefined>(undefined);

    export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const [cartItems, setCartItems] = useState<CartItemWithQuantity[]>([]);

      const addToCart = (item: PrebuiltConfig) => {
        setCartItems(prev => {
          const existingItem = prev.find(cartItem => cartItem.id === item.id);
          if (existingItem) {
            return prev.map(cartItem =>
              cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
          } else {
            return [...prev, { ...item, quantity: 1 }];
          }
        });
      };

      const removeFromCart = (itemId: string) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
      };

      const clearCart = () => {
        setCartItems([]);
      };

      const updateQuantity = (itemId: string, quantity: number) => {
        setCartItems(prev =>
          prev.map(item =>
            item.id === itemId ? { ...item, quantity } : item
          )
        );
      };

      const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      };

      return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity, getTotalPrice }}>
          {children}
        </CartContext.Provider>
      );
    };

    export const useCart = () => {
      const context = useContext(CartContext);
      if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
      }
      return context;
    };
