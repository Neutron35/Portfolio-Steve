import '@fontsource-variable/inter';
import './main.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { SessionProvider } from '@/Savoria/lib/sessionContext.tsx';
import { BrowserRouter as Router } from 'react-router-dom'; // Utilise BrowserRouter ici
import MainRouter from '@/mainRouter.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <SessionProvider>
          <Router>
            <MainRouter />
          </Router>
        </SessionProvider>
      </HelmetProvider>
    </StrictMode>,
  );
}
