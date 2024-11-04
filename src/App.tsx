import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Router from './pages/router';
import Footer from '@/components/footer.tsx';
import ScrollTop from '@/hooks/ScrollTop.tsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="flex min-h-screen flex-col items-center px-4 md:px-7 xl:mx-auto xl:max-w-[1153px]">
        <Header />
        <main className="flex w-full flex-col items-center gap-20 pb-24 md:gap-24">
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
