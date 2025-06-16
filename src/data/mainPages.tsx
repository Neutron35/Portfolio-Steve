import { Navigate } from 'react-router-dom';
import NotFound from '@/Portfolio/pages/notfound.tsx';
import { routerType } from '@/types/router.types';
import AppPortfolio from '@/Portfolio/App.tsx';
import AppSavoria from '@/Savoria/App.tsx';

const pagesData: routerType[] = [
  {
    path: 'Portfolio/*',
    element: <AppPortfolio />,
    title: '',
  },
  {
    path: 'Savoria/*',
    element: <AppSavoria />,
    title: '',
  },
  {
    path: 'notfound',
    element: <NotFound />,
    title: 'NotFound',
  },
  {
    path: '/',
    element: <Navigate to="/Portfolio" replace />,
    title: 'Redirect',
  },

  {
    path: '*',
    element: <Navigate to="/notfound" replace />,
    title: 'Redirect',
  },
];

export default pagesData;
