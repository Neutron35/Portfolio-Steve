import './main.css';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/About';
import Header from './components/Header';
import Home from './pages/Home';
import { StrictMode } from 'react';
import ThemeProvider from './hooks/themeProvider';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <div className="flex min-h-screen max-w-[1279px] flex-col items-center px-7 xl:mx-auto">
          <Header />
          <main className="flex w-full flex-col items-center gap-24 pb-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/notfound" replace />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
