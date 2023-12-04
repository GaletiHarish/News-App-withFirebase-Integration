// context/AppContext.js
import { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  user: null,
  news: [],
  favorites: [],
};

// Action types
const actionTypes = {
  SET_USER: 'SET_USER',
  SET_NEWS: 'SET_NEWS',
  ADD_FAVORITE: 'ADD_FAVORITE',
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.SET_NEWS:
      return { ...state, news: action.payload };
    case actionTypes.ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
};

// Custom hook to use the context
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext, actionTypes };