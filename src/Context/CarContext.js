import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Création d'un contexte pour le panier
const CartContext = createContext();

// Fonction de réduction (Reducer) pour gérer les actions du panier
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Exportation d'un hook personnalisé pour accéder au contexte du panier
export const useCartContext = () => useContext(CartContext);

// Composant fournisseur (Provider) pour le contexte du panier
export const CartProvider = ({ children }) => {
  // Récupération de l'état initial à partir du stockage local, s'il existe
  const initialState = JSON.parse(localStorage.getItem('cart')) || {
    items: [],
  };

  // Utilisation du hook useReducer pour gérer l'état du panier
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Effet secondaire pour mettre à jour le stockage local à chaque modification de l'état du panier
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  // Fournit le contexte du panier aux composants enfants
  const contextValue = { state, dispatch };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
