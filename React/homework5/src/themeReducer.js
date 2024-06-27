

export const initialState = {
    darkMode: false,
  };
  
  export const themeReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return { ...state, darkMode: !state.darkMode };
      default:
        return state;
    }
  };
  