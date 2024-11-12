import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Router from './pages/router';
import ScrollTop from '@/hooks/ScrollTop.tsx';
import { lazy, Suspense } from 'react';

const Footer = lazy(() => import('@/components/footer.tsx')); // Chargement paresseux du Footer

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="min-h-screen px-4 md:px-7 xl:mx-auto xl:max-w-[1153px]">
        <Header />
        <main className="w-full pb-24">
          <Router />
        </main>
        <Suspense fallback={<div className="h-20"></div>}>
          {/* Placeholder pour éviter le CLS */}
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
