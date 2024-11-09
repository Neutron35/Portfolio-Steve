import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Router from './pages/router';
import Footer from '@/components/footer.tsx';
import ScrollTop from '@/hooks/ScrollTop.tsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="min-h-screen px-4 md:px-7 xl:mx-auto xl:max-w-[1153px]">
        <Header />
        <main className="w-full pb-24">
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
