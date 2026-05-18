export const theme = {
  colors: {
    primary: '#1e1b4b',
    primaryLight: '#312e81',
    secondary: '#d4af37',
    secondaryDark: '#b45309',
    accent: '#CBC34FFF',
    accentGreen: '#10b981',
    dark: '#0f172a',
    darkLight: '#1e293b',
    surface: '#334155',
    text: '#e2e8f0',
    textMuted: '#94a3b8',
    gold: '#fbbf24',
    copper: '#d97706',
  },
  fonts: {
    heading: "'Cinzel', serif",
    body: "'Montserrat', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export const getColor = (color: keyof typeof theme.colors) => theme.colors[color];