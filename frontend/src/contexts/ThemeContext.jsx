import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Load initial state from localStorage or use defaults
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('theme-activeTheme') || 'orange-mechanic';
  });
  
  const [primaryColor, setPrimaryColor] = useState(() => {
    return localStorage.getItem('theme-primaryColor') || '#B2F96F'; // Default from user's image, roughly
  });

  const [transparentSidebar, setTransparentSidebar] = useState(() => {
    return localStorage.getItem('theme-transparentSidebar') === 'true';
  });

  // Save to localStorage when settings change
  useEffect(() => {
    localStorage.setItem('theme-activeTheme', activeTheme);
    localStorage.setItem('theme-primaryColor', primaryColor);
    localStorage.setItem('theme-transparentSidebar', transparentSidebar);
  }, [activeTheme, primaryColor, transparentSidebar]);

  // Apply theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes/data attributes
    root.setAttribute('data-theme', activeTheme);

    // If there's a custom primary color, inject it
    // Using a dynamic style override for --color-primary
    let styleEl = document.getElementById('theme-dynamic-styles');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'theme-dynamic-styles';
      document.head.appendChild(styleEl);
    }

    styleEl.innerHTML = `
      :root {
        --color-primary: ${primaryColor};
      }
    `;

    return () => {
      // cleanup if needed (not typically needed for global styles)
    };
  }, [activeTheme, primaryColor]);

  const value = {
    activeTheme,
    setActiveTheme,
    primaryColor,
    setPrimaryColor,
    transparentSidebar,
    setTransparentSidebar
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
