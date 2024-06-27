

import React, { useContext } from 'react';
import { AppContext } from './App';

const ThemeSwitcher = () => {
  const { dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div>
      <label>
        Dark Mode
        <input type="checkbox" onChange={toggleTheme} />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
