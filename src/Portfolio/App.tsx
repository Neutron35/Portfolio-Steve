// AppPortfolio.tsx
import Header from './components/header.tsx';
import Router from './Router.tsx';
import ScrollTop from '@/hooks/ScrollTop.tsx';
import { lazy, Suspense } from 'react';

const Footer = lazy(() => import('@/Portfolio/components/footer.tsx')); // Chargement paresseux du Footer

function AppPortfolio() {
  return (
    <>
      <ScrollTop />
      <div className="min-h-screen px-4 md:px-7 xl:mx-auto xl:max-w-[1153px]">
        <Header />
        <main className="w-full pb-24">
          <Router />
        </main>
        <Suspense fallback={<div className="h-20"></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default AppPortfolio;
