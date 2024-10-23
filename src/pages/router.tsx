import { Route, Routes } from 'react-router-dom';

import pagesData from '@/data/pagesData';
import { routerType } from '@/types/router.types';

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
