import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './pages/router';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen max-w-[1279px] flex-col items-center px-4 md:px-7 xl:mx-auto">
        <Header />
        <main className="flex w-full flex-col items-center gap-24 pb-24">
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
