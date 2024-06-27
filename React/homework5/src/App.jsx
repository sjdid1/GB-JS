

import React, { useReducer, createContext } from 'react';
import { initialState, themeReducer } from './themeReducer';
import ThemeSwitcher from './ThemeSwitcher';

export const AppContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className={state.darkMode ? 'dark-theme' : 'light-theme'}>
        <h1>Theme Switcher App</h1>
        <ThemeSwitcher />
      </div>
    </AppContext.Provider>
  );
};

export default App;
