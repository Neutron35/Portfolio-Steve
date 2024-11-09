import '@fontsource-variable/inter';
import './main.css';

import App from './App';
import { StrictMode } from 'react';
import ThemeProvider from './hooks/themeProvider';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>,
  );
}
