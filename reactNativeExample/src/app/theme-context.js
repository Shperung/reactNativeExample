import React, {useState, useLayoutEffect, useEffect} from 'react';
import {useDarkMode} from 'react-native-dark-mode';

// constants
import {LIGHT_THEME, DARK_THEME} from './mixins';

const ThemeContext = React.createContext({
  theme: LIGHT_THEME,
  toggleTheme: () => {},
});

export default ThemeContext;

export const ThemeProvider = props => {
  const [theme, setTheme] = useState(LIGHT_THEME);
  const isDarkMode = useDarkMode();

  useEffect(() => {
    setTheme(isDarkMode ? DARK_THEME : LIGHT_THEME);
  }, []);

  const toggleTheme = value => {
    setTheme(value === LIGHT_THEME ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
