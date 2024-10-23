import About from '@/pages/About';
import Home from '@/pages/Home';
import { Navigate } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Projects from '@/pages/Projects';
import { routerType } from '@/types/router.types';

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'Accueil',
  },
  {
    path: 'about',
    element: <About />,
    title: 'A propos',
  },
  {
    path: 'projects',
    element: <Projects />,
    title: 'Projets',
  },
  {
    path: 'notfound',
    element: <NotFound />,
    title: 'NotFound',
  },
  {
    path: '*',
    element: <Navigate to="/notfound" replace />,
    title: 'Redirect',
  },
];

export default pagesData;
