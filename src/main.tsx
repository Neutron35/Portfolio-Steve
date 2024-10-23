import './main.css';

import App from './App';
import { StrictMode } from 'react';
import ThemeProvider from './hooks/themeProvider';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
