import '@fontsource-variable/inter';
import './main.css';

import App from './App';
import { StrictMode } from 'react';
import ThemeProvider from './hooks/themeProvider';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
