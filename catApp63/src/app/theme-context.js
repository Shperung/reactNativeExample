import React, {useState, useLayoutEffect, useEffect} from 'react';
//import {useDarkMode} from 'react-native-dark-mode';

// constants
import {LIGHT_THEME, DARK_THEME} from './mixins';

const ThemeContext = React.createContext({
  theme: LIGHT_THEME,
  auto: true,
  toggleTheme: () => {},
  toggleAutoTheme: () => {},
});

export default ThemeContext;

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(LIGHT_THEME);
  const [auto, setAutoTheme] = useState(true);

  //const isDarkMode = useDarkMode();
  const isDarkMode = true;

  useEffect(() => {
    if (auto) {
      setTheme(isDarkMode ? DARK_THEME : LIGHT_THEME);
    }
  }, [isDarkMode, auto]);

  const toggleTheme = (value) => {
    setTheme(value === LIGHT_THEME ? LIGHT_THEME : DARK_THEME);
  };

  const toggleAutoTheme = (value) => {
    setAutoTheme(value);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        auto,
        toggleTheme,
        toggleAutoTheme,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
