import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  activeChakra: number;
  setActiveChakra: (index: number) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  isDark: true,
  toggleTheme: () => {},
  setTheme: () => {},
  activeChakra: 0,
  setActiveChakra: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('astrowithin-theme') as Theme;
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Default to dark celestial mode
  });
  const [activeChakra, setActiveChakra] = useState<number>(0);

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  useEffect(() => {
    localStorage.setItem('astrowithin-theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme, activeChakra, setActiveChakra }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
