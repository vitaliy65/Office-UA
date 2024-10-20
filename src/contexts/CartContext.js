import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';

// Створення контексту кошика
const CartContext = createContext();

// Початковий стан кошика
const initialState = {
  productsInCart: [],
};

// Редюсер для управління станом кошика
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingProductIndex = state.productsInCart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // Товар вже є в кошику, збільшуємо його кількість
        const updatedProducts = state.productsInCart.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        return {
          ...state,
          productsInCart: updatedProducts,
        };
      } else {
        // Товар відсутній в кошику, додаємо його з кількістю 1
        return {
          ...state,
          productsInCart: [...state.productsInCart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case 'REMOVE_FROM_CART': {
      const updatedProducts = state.productsInCart.filter(
        (product) => product.id !== action.payload
      );

      return {
        ...state,
        productsInCart: updatedProducts,
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedProducts = state.productsInCart.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product
      );

      return {
        ...state,
        productsInCart: updatedProducts,
      };
    }

    case 'CLEAR_CART': {
      return initialState;
    }

    default:
      return state;
  }
};

// Провайдер контексту кошика
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    try {
      const localData = localStorage.getItem('cart');
      return localData ? JSON.parse(localData) : initial;
    } catch (error) {
      console.error('Помилка при завантаженні кошика з localStorage:', error);
      return initial;
    }
  });

  // Збереження стану кошика в localStorage при його зміні
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Помилка при збереженні кошика в localStorage:', error);
    }
  }, [cart]);

  // Додавання товару в кошик
  const addToCart = useCallback((product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }, []);

  // Видалення товару з кошика
  const removeFromCart = useCallback((productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  }, []);

  // Оновлення кількості товару в кошику
  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity < 1) {
      console.warn('Спроба встановити кількість менше 1. Операція скасована.');
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  }, []);

  // Очищення всіх товарів з кошика
  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  // Обчислення загальної кількості товарів у кошику
  const itemCount = cart.productsInCart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Хук для використання контексту кошика
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart повинен бути використаний всередині CartProvider');
  }
  return context;
};
