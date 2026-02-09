"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { validateCart, clampQuantity } from '@/utils/sanitize';

const MAX_QUANTITY = 99;

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('glowup-cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        setCart(validateCart(parsed));
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
        localStorage.removeItem('glowup-cart');
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('glowup-cart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (product, quantity = 1) => {
    const safeQty = clampQuantity(quantity, 1, MAX_QUANTITY);
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        const newQty = clampQuantity(existingItem.quantity + safeQty, 1, MAX_QUANTITY);
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: newQty }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: safeQty }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    const safeQty = clampQuantity(quantity, 1, MAX_QUANTITY);
    if (safeQty < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: safeQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      isLoaded
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
