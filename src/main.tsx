import '@fontsource-variable/inter';
import './main.css';

import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { SessionProvider } from '@/lib/sessionContext.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <SessionProvider>
          <App />
        </SessionProvider>
      </HelmetProvider>
    </StrictMode>,
  );
}
